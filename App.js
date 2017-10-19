// Vendor Assets
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';

// Project Assets
import DecksContainer from './containers/DecksContainer';
import NewCardContainer from './containers/NewCardContainer';
import NewDeckContainer from './containers/NewDeckContainer';
import DeckMenu from './components/DeckMenu';
import reducers from './reducers';
import { lightGrey } from './utils/colors';

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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckMenu: {
    screen: DeckMenu,
  },
  NewCard: {
    screen: NewCardContainer,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGrey,
  },
});

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={styles.container}>
      <FlashcardStatusBar barStyle="light-content" />
      <MainNavigator />
    </View>
  </Provider>
);

export default App;
