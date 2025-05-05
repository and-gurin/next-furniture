import I18nProvider from "@/components/I18nProvider/I18nProvider"
import MainPage from "@/components/main-page/MainPage";

export default function Home() {
    return (
        <>
            <I18nProvider>
                <MainPage/>
            </I18nProvider>
        </>
    )
}
