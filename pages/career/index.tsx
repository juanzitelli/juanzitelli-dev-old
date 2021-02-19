import axios from 'axios'
import React from 'react'
import Courses from '../../components/career/Courses'
import JobExperiences from '../../components/career/JobExperiences'
import University from '../../components/career/University'
import Layout from '../../components/ui/Layout'
import SectionDescription from '../../components/ui/SectionDescription'
import { Course as CourseType } from '../../data/interfaces/career/Course'
import { useTranslation } from '../../hooks/useTranslation'

interface CareerProps {
	courses: CourseType[]
}

const Career = ({ courses }: CareerProps) => {
	const { t } = useTranslation();

	return (
		<Layout title={`${t.career.title}`}>
			<section className="p-5 sm:p-8 md:p-16 lg:p-32">
				<header>
					<SectionDescription title={t.career.title} description={t.career.description} />
				</header>
				<JobExperiences />
				<University />
				<Courses courses={courses} />
			</section>
		</Layout>
	)
}

export async function getServerSideProps() {

	const courseIDs = ["1362070", "3096364", "947098", "1879018", "1026604"]

	const courses: any = await Promise.all(
		courseIDs.map(async (courseID) => {
			const { data } = await axios.get(`https://www.udemy.com/api-2.0/courses/${courseID}/`);
			return data;
		})
	);
	
	return {
		props: { courses },
	}
	// console.log(courses);
}

export default Career
