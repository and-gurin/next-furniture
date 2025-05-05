import {Metadata} from "next";
import Contacts from "@/components/contacts/Contacts";
import I18nProvider from "@/components/I18nProvider/I18nProvider"

export const metadata: Metadata = {
    title: 'Kontakt | InHouse meble'
}
export default function ContactsPage () {

    return (
        <>
            <I18nProvider>
                <Contacts/>
            </I18nProvider>
        </>
    )
}