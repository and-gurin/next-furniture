import I18nProvider from '@/components/I18nProvider/I18nProvider';
import Header from "@/components/header/Header";

export default function HeaderTranslate() {

    return (
        <I18nProvider>
            <Header/>
        </I18nProvider>
    );
}