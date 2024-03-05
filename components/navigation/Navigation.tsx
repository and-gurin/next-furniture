import Link from "next/link";
type LinkPropsType = {id: number, title: string, href: string}

function NavItem({links}: { links: LinkPropsType[] }) {
    return (
        links.map(link =>
            <li key={link.id}>
                <Link href={link.href}>
                    {link.title}
                </Link>
            </li>
        )
    )
}

export default NavItem