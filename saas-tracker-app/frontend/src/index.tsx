import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import { apolloClient } from './graphql/apolloClient';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);