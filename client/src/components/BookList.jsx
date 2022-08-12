import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'

function BookList() {
	const { loading, data } = useQuery(getBooksQuery)

	if (loading) return <p>Loading...</p>

	console.log(data.books)

	const books = data.books

  return (
		<div>
			<ul id='booklist'>
				{books.map((book) => (
					<li key={book.id}>{book.name}</li>
				))}
			</ul>
		</div>
  )
}

export default BookList
