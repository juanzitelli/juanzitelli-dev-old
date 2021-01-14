import { useTranslation } from "../../hooks/useTranslation"
import JobExperience from "./JobExperience";


const JobExperiences = () => {
	const { t } = useTranslation();
	return (
		<section>
			<h1 className="text-3xl py-6">{t.career.jobExperiencesSection.title}</h1>
			{
				t.career.jobExperiencesSection.jobExperiences.map(jobExperience => <JobExperience jobExperience={jobExperience} />)
			}
		</section>
	)
}

export default JobExperiences
