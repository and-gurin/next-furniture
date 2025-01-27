'use client'

import Link from "next/link";
import {useTranslation} from "react-i18next";
type LinkPropsType = {id: number, title: string, href: string}

function NavItem({links, openMenu}: {
    links: LinkPropsType[],
    openMenu?: () => void
}) {

    const { t } = useTranslation('gallery');

    return (
        links.map(link =>
            <li key={link.id} onClick={openMenu}>
                <Link href={link.href}>
                    {t(link.title)}
                </Link>
            </li>
        )
    )
}

export default NavItem