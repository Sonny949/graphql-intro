const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { default: mongoose } = require('mongoose')
const schema = require('./schema/schema')
const cors = require('cors')
require('dotenv').config()

const app = express()

// allow cross origin requests
app.use(cors())

// connect to atlas database
mongoose.connect(process.env.MONGO_DB)
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