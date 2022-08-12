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
    query Mutation {
        addBook{
            name
        }
    }
`

export { getAuthorsQuery, getBooksQuery }