import { Sport as SportInterface } from '../../data/interfaces/about/Sport'
import { useTranslation } from '../../hooks/useTranslation';
import dayjs from 'dayjs'

const Sport = (props: { sport: SportInterface }) => {
	const { sport } = props;
	const { t, locale } = useTranslation();
	
	const dayjsStart = dayjs(sport.start).format('DD-MM-YYYY');
	const dayjsEnd = dayjs(sport.end).format('DD-MM-YYYY');

	return (
		<article className="flex flex-col justify-between items-start p-6 my-2 mx-2 bg-white bg-opacity-20 rounded-lg max-w-3xl shadow-2xl">

			<header>
				<h1 className="text-2xl my-4">{sport.name}</h1>
			</header>

			<strong>{t.about.sportsSection.timeline.title}</strong>
			<p className="my-4">{`📅 ${locale === "es" ? "Desde" : "From"} ${dayjsStart} ${locale === "es" ? "hasta" : "to"} ${dayjsEnd}`}</p>

			<strong>{t.about.sportsSection.location.title}</strong>
			<p className="my-4">{`🌎 ${sport.location}`}</p>

			<strong>{t.about.sportsSection.learned.title}</strong>
			<p className="my-4">{sport.learned}</p>

		</article>
	)
}

export default Sport
