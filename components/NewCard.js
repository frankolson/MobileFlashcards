// Vendor Assets
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Project assets
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { black } from '../utils/colors';

const propTypes = {
  addCardToDeck: PropTypes.func.isRequired,
  getDecks: PropTypes.func.isRequired,
  navigation: PropTypes.shape.isRequired,
  receiveDecks: PropTypes.func.isRequired,
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
  buttonText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderRadius: 7,
    margin: 10,
  },
});

class NewDeck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      question: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, value) {
    this.setState({
      [field]: value,
    });
  }

  handleSubmit() {
    const { id } = this.props.navigation.state.params;
    this.props.addCardToDeck(id, this.state)
      .then(this.props.getDecks().then(results => (
        this.props.receiveDecks(results)
      )));

    this.props.navigation.goBack();
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          onChangeText={this.handleChange}
          placeholder="Question"
          style={styles.input}
          value={this.state.question}
        />

        <TextInput
          onChangeText={this.handleChange}
          placeholder="Answer"
          style={styles.input}
          value={this.state.answer}
        />

        <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

NewDeck.propTypes = propTypes;

export default NewDeck;
