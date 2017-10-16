// Vendor Assets
import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';

// Project Assets
import Deck from './Deck';
import NoResults from './NoResults';

const propTypes = {
  /* eslint-disable react/forbid-prop-types */
  decks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })).isRequired,
  })),
  /* eslint-enable react/forbid-prop-types */
  getDecks: PropTypes.func.isRequired,
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
            <Deck
              count={item.questions.length}
              title={item.title}
            />
          )}
        />
      </View>
    );
  }
}

Decks.propTypes = propTypes;
Decks.defaultProps = defaultProps;

export default Decks;
