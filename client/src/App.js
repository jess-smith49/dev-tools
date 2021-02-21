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
import Header from './components/Header';
import Footer from './components/Footer'
//page imports
import Signup from './pages/SignupForm';
import Login from './pages/LoginForm';

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
        <div className="apply-grad container">
      <Router>
        <Header />
        <div className="cta-text"> The ulitmate resource for learning web developmemt at your own pace. Create your account to start learning today! </div>
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
          </Switch>
      </Router>
      <Footer />
        </div>
    </ApolloProvider>
  );
}

export default App;
