import "tailwindcss/tailwind.css"
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
import Landing from './pages/Landing';
import Footer from './components/Footer';
//page imports
import Signup from './pages/SignupForm';
import Login from './pages/LoginForm';
import Card from './components/Card';

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
      {/* remove Card later */}
      <Card />
       <Router>
        <div>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        </div>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
