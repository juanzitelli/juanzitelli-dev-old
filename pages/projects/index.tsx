import Axios from 'axios'
import ProjectCard from '../../components/projects/Project';
import Layout from '../../components/ui/Layout';
import SectionDescription from '../../components/ui/SectionDescription';
import { Repository } from '../../data/interfaces/projects/Repository';
import { useTranslation } from '../../hooks/useTranslation';
import { useProjects } from './../../hooks/useProjects'


const Projects = () => {
	const { t } = useTranslation();
	const { data: repos, isLoading, error } = useProjects();
	return (


		<Layout title={`${t.projects.title}`}>
			<section className="p-5 sm:p-8 md:p-16 lg:p-32">
				<header>
					<SectionDescription title={t.projects.title} description={t.projects.description} />
				</header>
				{!isLoading ?
					<main className="flex flex-row flex-wrap flex-auto justify-center">
						{
							(repos as Repository[]).map((repo) => <ProjectCard key={repo.id} repo={repo} />)
						}
					</main> : <p>Loading...</p>
				}

				{
					error && <p className="text-red-500">{error as string}</p>
				}
			</section>
		</Layout>
		// <div></div>
	)
}

export default Projects
