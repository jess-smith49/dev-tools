import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from 'apollo-boost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//component imports
import Header from './components/Header';
import Footer from './components/Footer'
//page imports
import SignUp from './pages/SignupForm';

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
      <Router>
        <Switch>
          <Route path='/'>
              <SignUp />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
