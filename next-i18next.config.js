module.exports = {
    i18n: {
        defaultLocale: 'pl',
        locales: ['en', 'pl', 'ru', 'be'], // Список поддерживаемых языков
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json', // Путь к JSON-файлам переводов
    },
    react: { useSuspense: false },//this line
};