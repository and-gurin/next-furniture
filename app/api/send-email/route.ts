import { NextResponse } from 'next/server';
import formidable from 'formidable';
import nodemailer from 'nodemailer';
import { IncomingMessage } from 'http';

// Отключаем встроенный парсер Next.js
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// Функция для преобразования Next.js Request в IncomingMessage
function toNodeIncomingMessage(req: Request): IncomingMessage {
    const headers = Object.fromEntries(req.headers.entries());
    const method = req.method || 'GET';
    const url = req.url;
    const body = req.body;

    // @ts-ignore
    const incomingMessage = new IncomingMessage(null);
    Object.assign(incomingMessage, { headers, method, url });

    if (body) {
        const reader = body.getReader();
        incomingMessage._read = function () {
            reader.read().then(({ done, value }) => {
                this.push(done ? null : Buffer.from(value));
            });
        };
    } else {
        incomingMessage._read = function () {
            this.push(null);
        };
    }

    return incomingMessage;
}

// Обработчик POST-запроса
export async function POST(req: Request) {
    const form = formidable({
        maxFileSize: 20 * 1024 * 1024, // 10 MB
        multiples: true, // Позволяем отправку нескольких файлов
    });

    const nodeRequest = toNodeIncomingMessage(req);

    return new Promise<void | Response>((resolve) => {
        form.parse(nodeRequest, async (err, fields, files) => {
            if (err) {
                console.error('Ошибка парсинга формы:', err);
                return resolve(
                    NextResponse.json({ message: 'Ошибка обработки формы.' }, { status: 500 })
                );
            }

            console.log('Поля формы:', fields);
            console.log('Файлы:', files);

            if (!files.file) {
                console.warn('Файлы не обнаружены.');
                return resolve(
                    NextResponse.json({ message: 'Файлы не обнаружены.' }, { status: 400 })
                );
            }

            try {
                // Настройка почтового транспорта
                const transporter = nodemailer.createTransport({
                    host: 'mail.inhouse-meble.pl',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'info@inhouse-meble.pl',
                        pass: '92204286_zzZ',
                    },
                });

                // Обработка файлов
                const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file];
                const attachments = uploadedFiles.map((file) => ({
                    filename: file.originalFilename || 'file',
                    path: file.filepath,
                }));

                const mailOptions = {
                    from: 'info@inhouse-meble.pl',
                    to: 'info@inhouse-meble.pl',
                    subject: `Обратная связь от ${fields.name}`,
                    text: `
Имя: ${fields.name}
Email: ${fields.email}
Телефон: ${fields.phone}
Сообщение: ${fields.message}
          `,
                    attachments, // Вложения файлов
                };

                await transporter.sendMail(mailOptions);

                resolve(
                    NextResponse.json({ message: 'Сообщение успешно отправлено!' }, { status: 200 })
                );
            } catch (error) {
                console.error('Ошибка отправки письма:', error);
                resolve(
                    NextResponse.json({ message: 'Ошибка отправки письма.' }, { status: 500 })
                );
            }
        });
    });
}
