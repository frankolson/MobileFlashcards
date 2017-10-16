// Vendor Assets
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// Project Assets
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';

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

const mapStateToProps = ({ decks }) => ({
  decks,
});

export default connect(mapStateToProps)(Decks);
