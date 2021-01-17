import Link from "next/link"
import { NavbarItem } from "../../data/interfaces/ui/NavbarItem"

const NavbarLink = ({ description, url }: NavbarItem) => {
	return (
		<Link href={`${url}`}><a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium  transition duration-300 ease-in-out hover:bg-gray-600">{description}</a></Link>
	)
}

export default NavbarLink
