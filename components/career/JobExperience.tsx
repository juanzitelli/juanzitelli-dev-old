import { JobExperience as IJobExperience } from "../../data/interfaces/career/JobExperience";
import { useTranslation } from "../../hooks/useTranslation"
import Technologies from "./Technologies";
import dayjs from 'dayjs'
interface JobExperienceProps {
	jobExperience: IJobExperience
}

const JobExperience = ({ jobExperience }: JobExperienceProps) => {
	const { t, locale } = useTranslation();

	const dayjsStart = dayjs(jobExperience.start).format('DD-MM-YYYY');

	const dayjsEnd = typeof jobExperience.end === "string" ? jobExperience.end : dayjs(jobExperience.end).format('DD-MM-YYYY');

	return (
		<article className="flex flex-col justify-between items-start p-6 my-2 mx-2 bg-white bg-opacity-20 rounded-lg max-w-3xl shadow-2xl">

			<header>
				<h1 className="text-2xl my-4">{jobExperience.company}</h1>
			</header>

			<strong>{`${t.career.jobExperiencesSection.timeline.title}`}</strong>
			<p className="my-4">{`${locale === "es" ? "Desde" : "From"} ${dayjsStart} ${locale === "es" ? "hasta" : "to"} ${dayjsEnd}`}</p>

			<strong>{`${t.career.jobExperiencesSection.location.title}`}</strong>
			<p className="my-4">{`🌎 ${jobExperience.location}`}</p>

			<strong>{`${t.career.jobExperiencesSection.description.title}`}</strong>
			<p className="my-4">{`${jobExperience.description}`}</p>

			<strong>{`${t.career.jobExperiencesSection.learned.title}`}</strong>
			<p className="my-4">{jobExperience.learned}</p>

			<Technologies technologies={jobExperience.technologies} title={t.career.jobExperiencesSection.technologies.title} />
		</article>
	)
}

export default JobExperience
