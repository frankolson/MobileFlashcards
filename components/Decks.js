// Vendor Assets
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// Project Assets
import { getDecks } from '../utils/api';
import NoResults from './NoResults';

const propTypes = {
  /* eslint-disable react/forbid-prop-types */
  decks: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  receiveDecks: PropTypes.func.isRequired,
};

const defaultProps = {
  decks: {},
};

class Decks extends Component {
  componentWillMount() {
    getDecks()
      .then(decks => this.props.receiveDecks(decks));
  }

  render() {
    const { decks } = this.props;

    if (!decks || Object.keys(decks).length === 0) {
      return <NoResults />;
    }

    return (
      <View>
        <Text>Decks View</Text>
        <Text>{JSON.stringify(this.props.decks)}</Text>
      </View>
    );
  }
}

Decks.propTypes = propTypes;
Decks.defaultProps = defaultProps;

export default Decks;
