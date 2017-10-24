// Vendor Assets
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import devToolsEnhancer from 'remote-redux-devtools';

// Project Assets
import DecksContainer from './containers/DecksContainer';
import DeckMenuContainer from './containers/DeckMenuContainer';
import NewCardContainer from './containers/NewCardContainer';
import NewDeckContainer from './containers/NewDeckContainer';
import QuizContainer from './containers/QuizContainer';
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
}, {
  navigationOptions: {
    header: null,
  },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckMenu: {
    screen: DeckMenuContainer,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.deck.title,
    }),
  },
  NewCard: {
    screen: NewCardContainer,
    navigationOptions: ({ navigation }) => ({
      title: `New Card: ${navigation.state.params.deck.title}`,
    }),
  },
  Quiz: {
    screen: QuizContainer,
    navigationOptions: ({ navigation }) => ({
      title: `Quiz: ${navigation.state.params.deck.title}`,
    }),
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGrey,
  },
});

const App = () => (
  <Provider store={createStore(reducers, devToolsEnhancer())}>
    <View style={styles.container}>
      <FlashcardStatusBar barStyle="light-content" />
      <MainNavigator />
    </View>
  </Provider>
);

export default App;
