"use client";

import "@/styles/wrapper.scss";
import style from "./FormValuation.module.scss";
import { baskerville } from "@/app/fonts";
import React, { useState } from "react";

export default function FormValuation() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        phone: string;
        message: string;
        files: File[]; // Массив файлов
    }>({
        name: "",
        email: "",
        phone: "",
        message: "",
        files: [], // Изначально пустой массив
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = e.target.files ? Array.from(e.target.files) : [];
        const maxFileSize = 10 * 1024 * 1024; // 10 MB
        const validFiles = newFiles.filter((file) => {
            if (file.size > maxFileSize) {
                alert(`Plik ${file.name} jest za duży (maks. 10 MB)`);
                return false;
            }
            return true;
        });
        setFormData((prev) => ({
            ...prev,
            files: [...prev.files, ...validFiles], // Объединяем старые и новые файлы
        }));
    };

    const handleFileRemove = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index), // Удаляем файл по индексу
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataObj = new FormData();
        formDataObj.append("name", formData.name);
        formDataObj.append("email", formData.email);
        formDataObj.append("phone", formData.phone);
        formDataObj.append("message", formData.message);

        if (formData.files.length > 0) {
            formData.files.forEach((file) => {
                formDataObj.append("file", file); // Добавляем все файлы
                console.log("Файл отправляется:", file.name, file.size);
            });
        } else {
            console.warn("Pliki nie są zaznaczone");
        }

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                body: formDataObj,
            });

            if (response.ok) {
                alert("Wiadomość wysłana pomyślnie!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    files: [],
                });
            } else {
                alert("Błąd podczas wysyłania wiadomości");
            }
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };

    return (
        <div className={style.form}>
            <h3 className={baskerville.className + " " + style.form__title}>
                Wycena w 24 godziny
            </h3>
            <p className={style.form__subtitle}>
                Masz już projekt kuchni lub innych mebli? Dowiedz się, ile będzie kosztować wdrożenie
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={style.form__field}
                    name="name"
                    value={formData.name}
                    placeholder="Imię"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    className={style.form__field}
                    name="email"
                    value={formData.email}
                    placeholder="Email (Wymagane)"
                    onChange={handleChange}
                />
                <input
                    type="tel"
                    className={style.form__field}
                    name="phone"
                    value={formData.phone}
                    placeholder="Telefon"
                    onChange={handleChange}
                    required
                />
                <div className={style.upload}>
                    <label className={style.upload__button} htmlFor="file-upload">
                        Dodaj pliki
                    </label>
                    <ul className={style.upload__filelist}>
                        {formData.files.length > 0 ? (
                            formData.files.map((file, index) => (
                                <li key={index} className={style.upload__filename}>
                                    {file.name}<em>({(file.size / (1024 * 1024)).toFixed(2)} MB)</em>
                                    <button
                                        type="button"
                                        className={style.upload__remove}
                                        onClick={() => handleFileRemove(index)}
                                    >
                                        Usuń
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className={style.upload__filename}>Możesz dodać kilka plików</li>
                        )}
                    </ul>
                    <input
                        id="file-upload"
                        name="files"
                        multiple
                        className={style.upload__field}
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                <textarea
                    name="message"
                    className={style.form__field + " " + style.form__field_area}
                    placeholder="Wiadomość..."
                    value={formData.message}
                    onChange={handleChange}
                />
                <button className={style.form__button} type="submit">
                    Wyślij
                </button>
            </form>
        </div>
    );
}