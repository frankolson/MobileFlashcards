// Vendor Assets
import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
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
  getDecks: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  receiveDecks: PropTypes.func.isRequired,
};

const defaultProps = {
  decks: [],
};

class Decks extends Component {
  constructor(props) {
    super(props);

    this.handleOnPress = this.handleOnPress.bind(this);
  }

  componentWillMount() {
    this.props.getDecks()
      .then(decks => this.props.receiveDecks(decks));
  }

  handleOnPress(deck) {
    this.props.navigate({
      routeName: 'DeckMenu',
      params: { deck },
    });
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
            <TouchableOpacity onPress={() => this.handleOnPress(item)}>
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
