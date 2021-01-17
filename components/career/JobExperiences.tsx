import { useTranslation } from "../../hooks/useTranslation"
import JobExperience from "./JobExperience";


const JobExperiences = () => {
	const { t } = useTranslation();
	return (
		<section>
			<header>
				<h1 className="text-3xl py-6">{t.career.jobExperiencesSection.title}</h1>

			</header>
			<main className="flex flex-wrap">
				{
					t.career.jobExperiencesSection.jobExperiences.map(jobExperience => <JobExperience key={jobExperience.description} jobExperience={jobExperience} />)
				}
			</main>
		</section>
	)
}

export default JobExperiences
