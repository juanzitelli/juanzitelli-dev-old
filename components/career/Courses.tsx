
import { Course as ICourse } from '../../data/interfaces/career/Course';
import { useTranslation } from '../../hooks/useTranslation';
import Course from './Course';

interface CoursesProps {
	courses: ICourse[]
}

const Courses = ({ courses }: CoursesProps) => {
	const { t } = useTranslation();
	return (
		<section>
			<header>
				<h1 className="text-3xl py-6">{t.career.coursesSection.title}</h1>
			</header>
			<main className="flex flex-wrap">
				{
					courses && courses.map((course: ICourse) => <Course key={course.id} course={course} />)
				}
			</main>
		</section>


	)
}

export default Courses
