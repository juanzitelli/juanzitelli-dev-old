import { Technology as ITechnology } from './../../data/interfaces/career/Technology'

interface TechnologyProps {
	technology: ITechnology
}

const Technology = ({ technology }: TechnologyProps) => {
	return (
		<span className="bg-blue-900 text-white px-2 py-1 rounded-lg mt-1 sm:mx-1 md:mx-2">
			{technology.description}
		</span>
	)
}

export default Technology
