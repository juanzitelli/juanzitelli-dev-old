import { Book as IBook } from "../../data/interfaces/about/Book"
import { useTranslation } from "../../hooks/useTranslation"

interface BookProps {
	book: IBook
}

const Book = ({ book }: BookProps) => {
	const { t } = useTranslation();
	return (
		<article className="flex flex-col justify-between items-start p-6 my-2 mx-2 bg-white bg-opacity-20 rounded-lg max-w-3xl">

			<header>
				<h1 className="text-2xl my-4">{book.name}</h1>
			</header>

			<strong>{t.about.booksSection.author.title}</strong>
			<p className="my-4">{`${book.author}`}</p>

			<strong>{t.about.booksSection.publisher.title}</strong>
			<p className="my-4">{`${book.publisher}`}</p>

			<strong>{t.about.booksSection.year.title}</strong>
			<p className="my-4">{`${book.year}`}</p>

			<strong>{t.about.booksSection.learned.title}</strong>
			<p className="my-4">{book.learned}</p>

		</article>
	)
}

export default Book
