import { useTranslation } from "../../hooks/useTranslation"

const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer className="bg-gray-800 pt-10 flex flex-col items-center">
			<div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex text-gray-300">
				<a href="https://facebook.com/juanagustinzitelli" className="w-7 mx-1">
					<i className="uil uil-facebook-f"></i>
				</a>
				<a href="https://twitter.com/juanzitelli" className="w-7 mx-1">
					<i className="uil uil-twitter-alt"></i>
				</a>
				<a href="https://github.com/juanzitelli" className="w-7 mx-1">
					<i className="uil uil-github"></i>
				</a>
				<a href="https://linkedin.com/in/juanzitelli" className="w-7 mx-1">
					<i className="uil uil-linkedin"></i>
				</a>
				<a href="https://instagram.com/juanzitelli" className="w-7 mx-1">
					<i className="uil uil-instagram"></i>
				</a>
			</div>


			<span className="my-3 block text-gray-300 hover:text-gray-100 text-sm text-center font-medium duration-700">{t.home.madeBy} <a href="https://github.com/juanzitelli" target="_blank" rel="noopener noreferrer">@juanzitelli</a></span>
		</footer>
	)
}

export default Footer
