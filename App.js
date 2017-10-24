// Vendor Assets
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import devToolsEnhancer from 'remote-redux-devtools';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

// Project Assets
import DecksContainer from './containers/DecksContainer';
import DeckMenuContainer from './containers/DeckMenuContainer';
import NewCardContainer from './containers/NewCardContainer';
import NewDeckContainer from './containers/NewDeckContainer';
import QuizContainer from './containers/QuizContainer';
import reducers from './reducers';
import { lightGrey, primary, white } from './utils/colors';

const FlashcardStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar backgroundColor={backgroundColor} translucent {...props} />
  </View>
);

const Tabs = TabNavigator({
  Decks: {
    screen: DecksContainer,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />,
    },
  },
  NewDeck: {
    screen: NewDeckContainer,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
    },
  },
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? primary : white,
    style: {
      backgroundColor: Platform.OS === 'ios' ? white : primary,
    },
  },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary,
      },
    },
  },
  DeckMenu: {
    screen: DeckMenuContainer,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.deck.title,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary,
      },
    }),
  },
  NewCard: {
    screen: NewCardContainer,
    navigationOptions: ({ navigation }) => ({
      title: `New Card: ${navigation.state.params.deck.title}`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary,
      },
    }),
  },
  Quiz: {
    screen: QuizContainer,
    navigationOptions: ({ navigation }) => ({
      title: `Quiz: ${navigation.state.params.deck.title}`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary,
      },
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
      <FlashcardStatusBar backgroundColor={primary} barStyle="light-content" />
      <MainNavigator />
    </View>
  </Provider>
);

export default App;
