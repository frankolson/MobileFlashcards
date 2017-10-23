// Vendor Assets
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Project Assets
import { black, grey, white } from '../utils/colors';

const propTypes = {
  question: PropTypes.string.isRequired,
  viewAnswer: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
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

const Question = ({ question, viewAnswer }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{question}</Text>

    <TouchableOpacity
      onPress={viewAnswer}
      style={styles.button}
    >
      <Text style={styles.buttonText}>View Answer</Text>
    </TouchableOpacity>
  </View>
);

Question.propTypes = propTypes;

export default Question;
