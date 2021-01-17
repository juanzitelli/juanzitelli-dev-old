import Image from "next/image";
import { Course as ICourse } from "../../data/interfaces/career/Course"
import { useTranslation } from "../../hooks/useTranslation"

interface CourseProps {
	course: ICourse
}

const Course = ({ course }: CourseProps) => {
	const { t } = useTranslation();
	return (
		<a rel="noopener" href={`https://udemy.com${course.url}`} target="_blank" className="max-w-lg" >
			<article className="flex flex-col justify-between items-start p-6 my-2 mx-2 bg-white bg-opacity-20 rounded-lg max-w-3xl shadow-2xl hover:bg-opacity-10 hover:cursor-pointer">
				<header>
					<h1 className="text-2xl my-4">{course.title}</h1>
				</header>
				<main>
					<Image loading="lazy" layout="intrinsic" alt={`${course.title}`} src={`${course.image_480x270}`} height={270} width={480} />
				</main>
			</article>
		</a>
	)
}

export default Course
