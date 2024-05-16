import Link from "next/link";
type LinkPropsType = {id: number, title: string, href: string}

function NavItem({links, openMenu}: {
    links: LinkPropsType[],
    openMenu?: () => void
}) {
    return (
        links.map(link =>
            <li key={link.id} onClick={openMenu}>
                <Link href={link.href}>
                    {link.title}
                </Link>
            </li>
        )
    )
}

export default NavItem