import React from 'react'
import Courses from '../../components/career/Courses'
import JobExperiences from '../../components/career/JobExperiences'
import University from '../../components/career/University'
import Layout from '../../components/ui/Layout'
import SectionDescription from '../../components/ui/SectionDescription'
import { useTranslation } from '../../hooks/useTranslation'

const Career = () => {
	const { t } = useTranslation();
	return (
		<Layout title="Career">
			<section className="p-5 sm:p-8 md:p-16 lg:p-32">
				<header>
					<SectionDescription title={t.career.title} description={t.career.description} />
				</header>
				<JobExperiences />
				<University />
				<Courses />
			</section>
		</Layout>
	)
}

export default Career
