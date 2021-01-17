
import { useState } from 'react'
import { NavbarItem } from '../../data/interfaces/ui/NavbarItem'
import NavbarLink from './NavbarLink'

interface NavbarProps {
	items: NavbarItem[]
}


const Navbar = ({ items }: NavbarProps) => {

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleOpenMenuOnClick = () => {
		setIsMenuOpen(ps => !ps)
	}
	
	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

						<button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={handleOpenMenuOnClick} aria-expanded="false">
							<span className="sr-only">Open main menu</span>

							<svg className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
							<svg className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch">
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								{
									items.map(item => <NavbarLink key={`${item.description}`} url={item.url} description={item.description} />)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${isMenuOpen ? "block" : "hidden"} sm:${isMenuOpen ? "block" : "hidden"}`}>
				<div className="px-2 pt-2 pb-3 space-y-1">
					{
						items.map(item => <NavbarLink key={`${item.description}`} url={item.url} description={item.description} />)
					}
				</div>
			</div>
		</nav>

	)
}

export default Navbar
