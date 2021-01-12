interface BooksInterface {
	books: Book[];
}
const Books = ({ books }: BooksInterface) => {
	return (
		<>
			<h1 className="text-3xl py-6">{booksTitle}</h1>
			{
				books.map(() => <Book  />)
			}
		</>
	)
}

export default Books


/**
 * 	name,
	nameTitle,
	author,
	authorTitle,
	publisher,
	publisherTitle,
	learned,
	learnedQuestion
 */