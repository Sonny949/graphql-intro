import React from 'react'
import { getBookQuery } from '../queries/queries'
import { useQuery } from '@apollo/client'


function BookDetails({ bookId }) {

	const { loading, data } = useQuery(getBookQuery, { variables: { id: bookId }})	

	if (loading) return <p className="book-details">Loading Selected Book...</p>
	console.log({data})

	const book = data.book

	if (book === null) return (
		<div className="book-details">There is no book selected</div>
	)

    return (
		<div className="book-details">
			{console.log(book.name)}
			{(
				<div>
					<h2>{ book.name }</h2>
				  <p>{ book.genre }</p>
					<p>{ book.author.name }</p>
					<p>All books by this Author</p>
					<ul className='other-books'>
						{book.author.books.map(item => {
							return <li key={ item.id }>{ item.name }</li>
						})}
					</ul>
				</div>
			)}	      
    </div>
  )  
}

export default BookDetails