import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from 'apollo-boost';
//component imports
import Header from './components/Header';
import Footer from './components/Footer'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },

  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <main>
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
