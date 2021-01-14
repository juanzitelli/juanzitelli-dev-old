import { useTranslation } from "../../hooks/useTranslation"

const University = () => {
	const { t } = useTranslation();
	const { choice, averageScore, subjects, expectations } = t.career.universitySection.university
	return (
		<section>
			<h1 className="text-3xl py-6">{t.career.universitySection.title}</h1>

			<article className="flex flex-col justify-between items-start p-6 my-2 mx-2 bg-white bg-opacity-20 rounded-lg max-w-3xl">

				<strong>{`${t.career.universitySection.choice.title}`}</strong>
				<p className="my-4">{`${choice}`}</p>

				<strong>{`${t.career.universitySection.subjects.title}`}</strong>
				<p className="my-4">{`${subjects}`}</p>

				<strong>{`${t.career.universitySection.expectations.title}`}</strong>
				<p className="my-4">{`${expectations}`}</p>

				<strong>{`${t.career.universitySection.averageScore.title}`}</strong>
				<p className="my-4">{`${averageScore} / 10`}</p>

			</article>

		</section>
	)
}

export default University
