import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'
import { useState } from 'react'

// Components
import BookDetails from './BookDetails'

function BookList() {
	const { loading, data } = useQuery(getBooksQuery)
	const [selected, setSelected] = useState(null)

	if (loading) return <p>Loading...</p>

	const books = data.books

  return (
		<div>
			{console.log(selected)}
			<ul id='booklist'>
				{books.map((book) => (
					<li key={book.id} onClick={(e) => {setSelected(book.id)}}>{book.name}</li>
				))}
			</ul>
			<BookDetails bookId={selected} />
		</div>
  )
}

export default BookList
