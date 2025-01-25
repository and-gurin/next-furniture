import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend) // Используем i18next-http-backend для загрузки JSON-файлов
    .use(initReactI18next) // Интеграция с React
    .init({
        lng: 'pl', // Текущий язык. Можно сменить динамически
        interpolation: {
            escapeValue: false, // React уже экранирует HTML
        },
        react: {
            useSuspense: false, // Отключаем Suspense для SSR
        },
        ns: ['contact-materials-privacy', 'cookie', 'galery-header-stages'], // Указываем используемые namespaces
        defaultNS: 'contact-materials-privacy', // Пространство имён по умолчанию
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Путь к JSON-файлам
        },
        //debug: process.env.NODE_ENV === 'development', // Включить логирование в режиме разработки
    });

export default i18n;