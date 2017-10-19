// Vendor Assets
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Project Assets
import Deck from './Deck';
import { black } from '../utils/colors';

const propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 10,
    alignSelf: 'center',
    margin: 10,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});

class DeckMenu extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  constructor(props) {
    super(props);

    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleAddCard() {
    this.props.navigation.navigate(
      'NewCard',
      {
        id: this.props.navigation.state.params.id,
        title: 'Add a card',
      },
    );
  }

  handleStart() {
    console.log(this.props.navigation.state.params.title);
  }

  render() {
    const { cards, title } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Deck
          count={cards.length}
          title={title}
        />

        <TouchableOpacity
          onPress={this.handleStart}
          style={styles.button}
        >
          <Text style={styles.buttonText}>start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.handleAddCard}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add a card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

DeckMenu.propTypes = propTypes;

export default DeckMenu;
