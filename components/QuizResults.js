// Vendor Assets
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Project Assets
import { black, grey, white } from '../utils/colors';

const propTypes = {
  leaveQuiz: PropTypes.func.isRequired,
  numCards: PropTypes.number.isRequired,
  resetQuiz: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignSelf: 'center',
    margin: 10,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  score: {
    fontSize: 24,
    textAlign: 'center',
  },
  scoreContainer: {
    flex: 1,
    backgroundColor: white,
    borderColor: grey,
    borderRadius: 4,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    padding: 50,
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
  },
});

const Deck = ({ leaveQuiz, numCards, resetQuiz, score }) => (
  <View style={styles.container}>
    <View style={styles.scoreContainer}>
      <Text style={styles.text}>Your quiz results:</Text>

      <Text style={styles.score}>{`${score}/${numCards}`}</Text>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={leaveQuiz}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back to deck</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={resetQuiz}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Do it again!</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Deck.propTypes = propTypes;

export default Deck;
