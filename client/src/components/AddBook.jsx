import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getAuthorsQuery } from '../queries/queries'

function AddBook() {
	const [formState, setFormState] = useState({
		name: "",
		genre: "",
		authorId: "62f58949c2e19cee7658ba52"
	})

	const { loading, data } = useQuery(getAuthorsQuery)

	function handleChange(e) {
		const { name, value } = e.target
		setFormState({
			...formState,
			[name]: value
		})
	}

	const submitForm = (e) => {
		e.preventDefault()
		console.log(formState)
	}

	if (loading) return <p>Loading authors...</p>

	
	console.log(data.authors)
	const authors = data.authors

  return (
    <form id='add-book' onSubmit={submitForm}>

			<div className='field'>
				<label>Book Name:</label>
				<input
					type='text'
					name="name"
					value={formState['name']}
					onChange={handleChange}
				/>
			</div>

			<div className='field'>
				<label>Genre:</label>
				<input
					type='text'
					name="genre"
					value={formState['genre']}
					onChange={handleChange}
				/>
			</div>

			<div className='field'>
				<label>Author:</label>
				<select type="text"
					name="authorId"
					value={formState['authorId']}
					onChange={handleChange}
				>
					{authors.map((author) => (
						<option key={author.id} value={author.id}>{author.name}</option>
					))}
				</select>
			</div>

			<button type="submit" value="submit">+</button>

    </form>
  )
}

export default AddBook