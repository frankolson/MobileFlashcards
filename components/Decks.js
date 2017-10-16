// Vendor Assets
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Project Assets
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';

const propTypes = {
  /* eslint-disable react/forbid-prop-types */
  decks: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  dispatch: PropTypes.func.isRequired,
};

const defaultProps = {
  decks: {},
};

class Decks extends Component {
  componentWillMount() {
    const { dispatch } = this.props;

    getDecks()
      .then(decks => dispatch(receiveDecks(decks)));
  }

  render() {
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

const mapStateToProps = ({ decks }) => ({
  decks,
});

export default connect(mapStateToProps)(Decks);
