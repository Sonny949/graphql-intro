const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { default: mongoose } = require('mongoose')
const schema = require('./schema/schema')

const app = express()

// connect to atlas database
mongoose.connect("mongodb+srv://booksmanager:booksmanager@graphql-books.ctwfb79.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.once('open', () => {
	console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}))

app.listen(4000, () => {
	console.log('Now listening for requests on port 4000')
})