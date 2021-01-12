interface SectionDescriptionProps {
	title: string;
	description: string;
}

const SectionDescription = ({ title, description }: SectionDescriptionProps) => {
	return (
		<>
			<h1 className="pb-5 text-3xl sm:text-4xl md:text-5xl">{title}</h1>
			<h3 className="pb-3">{description}</h3>
			<hr />
		</>
	)
}

export default SectionDescription
