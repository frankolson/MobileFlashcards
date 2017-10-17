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
  getDecks: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired,
  receiveDecks: PropTypes.func.isRequired,
  saveDeckTitle: PropTypes.func.isRequired,
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
      title: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(title) {
    this.setState({
      title,
    });
  }

  handleSubmit() {
    this.props.saveDeckTitle(this.state.title)
      .then(this.props.getDecks().then(results => (
        this.props.receiveDecks(results)
      )));

    this.props.goHome();
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text>
          What is the title of your new deck?
        </Text>

        <TextInput
          onChangeText={this.handleTitleChange}
          style={styles.input}
          value={this.state.title}
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
