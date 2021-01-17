import { useTranslation } from "../../hooks/useTranslation"

const Music = () => {
	const { t } = useTranslation();
	return (
		<section>
			<h1 className="text-3xl py-6">{t.about.musicSection.title}</h1>
			<h2 className="text-1xl">{t.about.musicSection.description}</h2>
			<article className="flex flex-col justify-between items-start p-6 my-2 mx-2 bg-white bg-opacity-20 rounded-lg max-w-3xl shadow-2xl">
				<iframe className="rounded-lg max-w-full md:w-full lg:w-full" src="https://open.spotify.com/embed/playlist/37i9dQZF1EM3B0EdB9SdQe" width="300" height="380" frameBorder="2" allow="encrypted-media"></iframe>
			</article>
		</section>
	)
}

export default Music
