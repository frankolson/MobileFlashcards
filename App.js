// Vendor Assets
import React from 'react';
import { View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';

// Project Assets
import Decks from './components/Decks';
import NewDeck from './components/NewDeck';

const FlashcardStatusBar = props => (
  <View style={{ height: Constants.statusBarHeight }}>
    <StatusBar translucent {...props} />
  </View>
);

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlashcardStatusBar barStyle="light-content" />
        <Tabs />
      </View>
    );
  }
}

export default App;
