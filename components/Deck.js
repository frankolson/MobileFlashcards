// Vendor Assets
import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    padding: 50,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  count: {
    fontSize: 24,
    textAlign: 'center',
  },
});

const Deck = ({ count, title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.count}>{`${count} card(s)`}</Text>
  </View>
);

Deck.propTypes = propTypes;

export default Deck;
