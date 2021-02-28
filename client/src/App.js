// linking react
import React from 'react';
// linking apollo middle ware
import { ApolloProvider } from "@apollo/react-hooks";
// linking apollo middleware
import ApolloClient from 'apollo-boost';
// linking and extending router from React middlware
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//linking landing page. 
import Landing from './pages/Landing';
// linking footer components
import Footer from './components/Footer';
//linking signup page
import Signup from './pages/SignupForm';
// linkikng login page
import Login from './pages/LoginForm';
// linking dashboard page
import Dashboard from './pages/Dashboard'
// linking set wrapper page
import SetWrapper from './pages/SetWrapper';
// linking carousel template
import 'react-multi-carousel/lib/styles.css';
// linking set component. 
import Set from "./components/Set"

// establishing apollo client 
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  // establishing path
  uri: '/graphql'
})

// declaring React web application. 
function App() {
  return (
    <ApolloProvider client={client}>
      <Set />
       <Router>
        <div>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/flashcards">
            <SetWrapper />
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

// export react app to rest of appliaction. 
export default App;
