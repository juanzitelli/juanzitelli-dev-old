import { Technology as ITechnology } from "../../data/interfaces/career/Technology"
import Technology from "./Technology"

interface TechnologiesProps {
	technologies: ITechnology[]
	title: string
}

const Technologies = ({ technologies, title }: TechnologiesProps) => {
	return (
		<div className="flex flex-col">
			<strong className="mb-2">{`${title}`}</strong>
			<div className="flex flex-row justify-evenly items-start flex-wrap">
				{
					technologies.map(technology => <Technology key={technology.description} technology={technology} />)
				}
			</div>
		</div>
	)
}

export default Technologies
