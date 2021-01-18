import axios from 'axios'
import React from 'react'
import Courses from '../../components/career/Courses'
import JobExperiences from '../../components/career/JobExperiences'
import University from '../../components/career/University'
import Layout from '../../components/ui/Layout'
import SectionDescription from '../../components/ui/SectionDescription'
import { Course } from '../../data/interfaces/career/Course'
import { useTranslation } from '../../hooks/useTranslation'

interface CareerProps {
	courses: Course[]
}

const Career = ({ courses }: CareerProps) => {
	const { t } = useTranslation();
	console.log("Courses", courses);
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

	const { data: c1 } = await axios.get(`https://www.udemy.com/api-2.0/courses/1362070/`)
	const { data: c2 } = await axios.get(`https://www.udemy.com/api-2.0/courses/3096364/`)
	const { data: c3 } = await axios.get(`https://www.udemy.com/api-2.0/courses/947098/`)
	const { data: c4 } = await axios.get(`https://www.udemy.com/api-2.0/courses/1879018/`)

	const courses = [c1, c2, c3, c4]

	return {
		props: { courses: courses },
	}
}

export default Career
