// Vendor Assets
import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// Project Assets
import Deck from './Deck';
import NoResults from './NoResults';

const propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })).isRequired,
  })),
  getDeck: PropTypes.func.isRequired,
  getDecks: PropTypes.func.isRequired,
  goToDeck: PropTypes.func.isRequired,
  receiveDecks: PropTypes.func.isRequired,
};

const defaultProps = {
  decks: [],
};

class Decks extends Component {
  componentWillMount() {
    this.props.getDecks()
      .then(decks => this.props.receiveDecks(decks));
  }

  handleCardPress(id) {
    this.props.getDeck(id)
      .then(deck => this.props.goToDeck(deck));
  }

  render() {
    const { decks } = this.props;

    if (decks.length === 0) {
      return <NoResults />;
    }

    return (
      <View>
        <FlatList
          data={decks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.handleCardPress(item.id)}>
              <Deck
                count={item.cards.length}
                title={item.title}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

Decks.propTypes = propTypes;
Decks.defaultProps = defaultProps;

export default Decks;
