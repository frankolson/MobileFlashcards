// Vendor Assets
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Project Assets
import Deck from './Deck';
import { black } from '../utils/colors';

const propTypes = {
  deck: PropTypes.shape({
    cards: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
    })).isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  navigate: PropTypes.func.isRequired,
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
  constructor(props) {
    super(props);

    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleAddCard() {
    this.props.navigate({
      routeName: 'NewCard',
      params: {
        id: this.props.deck.id,
        title: 'Add a card',
      },
    });
  }

  handleStart() {
    console.log(this.props.deck.title);
  }

  render() {
    const { cards, title } = this.props.deck;

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
