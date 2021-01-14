interface SectionDescriptionProps {
	title: string;
	description: string;
	subtitle?: string;
}

const SectionDescription = ({ title, description, subtitle }: SectionDescriptionProps) => {
	return (
		<>
			<h1 className="pb-5 text-3xl sm:text-4xl md:text-5xl">{title}</h1>
			<h2 className="pb-5 text-xl sm:text-1xl md:text-2xl">{subtitle}</h2>
			<h3 className="pb-3">{description}</h3>
			<hr />
		</>
	)
}

export default SectionDescription
