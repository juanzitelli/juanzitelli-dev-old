

import { Repository } from "../../data/interfaces/projects/Repository"


interface ProjectProps {
	repo: Repository
}


const ProjectCard = ({ repo }: ProjectProps) => {
	return (
		<article className="bg-white bg-opacity-20 m-4 w-full sm:w-2/6 p-7 rounded-lg hover:bg-opacity-10 cursor-pointer">
			<header className="pb-10">
				<h1 className="pb-4"><strong className="text-lg">{`${repo.name}`}</strong></h1>
				<h2 className="text-sm text-justify">{`${repo.description}`}</h2>
			</header>
			<main className="flex flex-row justify-evenly items-center flex-wrap">
				{
					repo.homepage !== null && repo.homepage !== "" &&
					<a className="bg-green-600 rounded-lg px-2 py-1 hover:cursor-pointer hover:bg-gray-500" href={`${repo.homepage}`} target="_blank">
						<button>
							<i className="uil uil-external-link-alt" />
						</button>
					</a>
				}

				<a className="bg-gray-600 rounded-lg px-2 py-1 hover:cursor-pointer hover:bg-gray-500 " href={`${repo.html_url}`} target="_blank">
					<button>
						<i className="uil uil-github" />
					</button>
				</a>

			</main>
		</article>
	)
}

export default ProjectCard
