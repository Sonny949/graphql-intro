import React from 'react'
import { getBookQuery } from '../queries/queries'
import { useQuery } from '@apollo/client'


function BookDetails({ bookId }) {

	const { loading, data } = useQuery(getBookQuery, { variables: { id: bookId }})
	
	

	if (loading) return <p>Loading Selected Book...</p>
	console.log({data})

	if (data.book === null) return (
		<div>There is no book selected</div>
	)

  if (data != null) return (
		<div id="book-details">
			{console.log(data.book.name)}
			{(
				<div>
					<h2>{ data.book.name }</h2>
				  <p>{ data.book.genre }</p>
					<p>{ data.book.author.name }</p>
					<p>All books by this Author</p>
					<ul className='other-books'>
						{data.book.author.books.map(item => {
							return <li key={ item.id }>{ item.name }</li>
						})}
					</ul>
				</div>
			)}	      
    </div>
  )  
}

export default BookDetails