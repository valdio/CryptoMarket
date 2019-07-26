import React from 'react';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import App from './containers/App';
import storeConfig from './lib/reduxStore';

const {persistor, store} = storeConfig();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

export default () => (
  <Provider store={store}>
    <PersistGate
      loading={<View/>}
      onBeforeLift={onBeforeLift}
      persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
)
