import React from 'react'
import Books from '../../components/about/Books'
import Music from '../../components/about/Music'
import Sports from '../../components/about/Sports'
import Layout from '../../components/ui/Layout'
import SectionDescription from '../../components/ui/SectionDescription'
import { useTranslation } from '../../hooks/useTranslation'

const About = () => {
	const { t } = useTranslation();
	return (
		<Layout title="About">
			<section className="p-5 sm:p-8 md:p-16 lg:p-32">
				<header>
					<SectionDescription title={t.about.title} description={t.about.description} />
					<p className="text-lg text-justify mt-6">{t.about.briefDescription}</p>
				</header>
				<Sports />
				<Books />
				<Music />
			</section>

		</Layout>
	)
}

export default About
