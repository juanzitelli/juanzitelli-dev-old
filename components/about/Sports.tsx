import { Sport as SportInterface } from "../../data/interfaces/about/Sport"
import { useTranslation } from "../../hooks/useTranslation"
import Sport from "./Sport"

const Sports = () => {
	const { t } = useTranslation();
	return (
		<section>
			<h1 className="text-3xl py-6">{t.about.sportsSection.title}</h1>
			{
				t.about.sportsSection.sports.map(sport => <Sport
					key={`${sport.name}`} sport={sport} />)
			}
		</section>
	)
}

export default Sports
