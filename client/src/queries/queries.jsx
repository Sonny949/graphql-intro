import { gql } from '@apollo/client'

const getAuthorsQuery = gql`
	query RootQuery {
		authors{
			name
			id
		}
	}
`

const getBooksQuery = gql`
	query RootQuery {
		books{
			name
			id
		}
	}
`

const addBookMutation = gql`
	mutation ($name: String!, $genre: String!, $authorId: ID!) {
			addBook(name: $name, genre: $genre, authorId: $authorId){
				name
				id
		}
		}
`

const getBookQuery = gql`
	query RootQuery($id: ID) {
		book(id: $id) {
			id 
			name
			genre
			author {
				id
				name
				age
				books {
					name
					id
				}
			}
		}
	}
`

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery }