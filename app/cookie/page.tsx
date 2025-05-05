import "@/styles/wrapper.scss";
import { Metadata } from "next";
import Cookie from "@/components/cookie/Cookie";
import I18nProvider from "@/components/I18nProvider/I18nProvider";

export const metadata: Metadata = {
    title: "Cookie Policy | InHouse meble",
};
export default function CookiePolicy() {

    return (
        <>
            <I18nProvider>
                <Cookie/>
            </I18nProvider>
        </>
    );
}