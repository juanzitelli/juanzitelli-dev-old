import Axios from 'axios'
import ProjectCard from '../../components/projects/Project';
import Layout from '../../components/ui/Layout';
import SectionDescription from '../../components/ui/SectionDescription';
import { Repository } from '../../data/interfaces/projects/Repository';
import { useTranslation } from '../../hooks/useTranslation';

interface ProjectsProps {
	repos: Repository[]
}
/**
 * 
 */
const Projects = ({ repos }: ProjectsProps) => {
	const { t } = useTranslation();
	return (
		<Layout title={`${t.projects.title}`}>
			<section className="p-5 sm:p-8 md:p-16 lg:p-32">
				<header>
					<SectionDescription title={t.projects.title} description={t.projects.description} />
				</header>
				<main className="flex flex-row flex-wrap flex-auto justify-center">
					{
						repos.map(repo => <ProjectCard key={repo.id} repo={repo} />)
					}
				</main>
			</section>
		</Layout>
		// <div></div>
	)
}

export async function getStaticProps() {
	try {
		const { data } = await Axios.get('https://api.github.com/users/juanzitelli/repos')
		
		return {
			props: {
				repos: data
			}
		}
	} catch (error) {
		throw new Error("Error")
	}
}

export default Projects
