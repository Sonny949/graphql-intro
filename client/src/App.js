import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// Components
import BookList from "./components/BookList";
import AddBook from './components/AddBook';

// Apollo Client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      
      <div id="Main">
        <h1>Sonny's Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
