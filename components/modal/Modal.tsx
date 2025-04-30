import React, {useEffect, useRef} from 'react';
import style from './Modal.module.scss';
import FormValuation from "@/components/form-valuation/FormValuation";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    message?: string;
    setIsOpen: (isOpenModal: boolean)=> void
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, setIsOpen }) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsOpen]);

    if (!isOpen) return null;

    return (
        <div className={style.modal}>
            <div className={style.modal__content} >
                <span className={style.modal__close} onClick={onClose}>&times;</span>
                {message && <p>{message}</p>}
                <div ref={modalRef}>
                    <FormValuation mode={'modal'} setIsOpen={onClose}/>
                </div>
            </div>
        </div>
    );
};

export default Modal;