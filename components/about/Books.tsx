import { useTranslation } from "../../hooks/useTranslation"
import Book from "./Book"

const Books = () => {
	const { t } = useTranslation();
	return (
		<section>
			<h1 className="text-3xl py-6">{t.about.booksSection.title}</h1>
			{
				t.about.booksSection.books.map(book => <Book book={book} />)
			}
		</section>
	)
}

export default Books