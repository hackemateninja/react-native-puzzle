// packages
import 'react-native-gesture-handler';
import React from 'react';
import store from './src/state/state';
import {Provider} from 'react-redux';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/cknr7mr7bsmuq01yz3j1755h5/master',
  cache: new InMemoryCache(),
});

//navigator
import StackNavigator from './src/navigator/Stack';

// provider
import {AuthProvider} from './src/Provider';

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </ApolloProvider>
    </Provider>
  );
}
