// Vendor Assets
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';

// Project Assets
import DecksContainer from './containers/DecksContainer';
import NewDeckContainer from './containers/NewDeckContainer';
import reducers from './reducers';

const FlashcardStatusBar = props => (
  <View style={{ height: Constants.statusBarHeight }}>
    <StatusBar translucent {...props} />
  </View>
);

const Tabs = TabNavigator({
  Decks: {
    screen: DecksContainer,
  },
  NewDeck: {
    screen: NewDeckContainer,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={styles.container}>
      <FlashcardStatusBar barStyle="light-content" />
      <Tabs />
    </View>
  </Provider>
);

export default App;
