// Vendor Assets
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  noResultsText: {
    textAlign: 'center',
  },
});

const NoResults = () => (
  <View style={styles.noResultsContainer}>
    <Text style={styles.noResultsText}>
      There are no decks yet, you should go ahead and create your first!
    </Text>
  </View>
);

export default NoResults;
