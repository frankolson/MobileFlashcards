// Vendor Assets
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const propTypes = {
  deck: PropTypes.shape({
    cards: PropTypes.arrayOf(PropTypes.shape({
      answer: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
    })).isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  goBack: PropTypes.func.isRequired,
};

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCardPosition: 0,
      score: 0,
    };

    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
    this.leaveQuiz = this.leaveQuiz.bind(this);
  }

  handleCorrect() {
    this.setState({
      currentCardPosition: this.state.currentCardPosition + 1,
      score: this.state.score + 1,
    });
  }

  handleIncorrect() {
    this.setState({
      currentCardPosition: this.state.currentCardPosition + 1,
    });
  }

  leaveQuiz() {
    this.resetQuiz();
    this.props.goBack();
  }

  resetQuiz() {
    this.setState({
      currentCardPosition: 0,
      score: 0,
    });
  }

  render() {
    return (
      <View>
        <Text>Quiz time</Text>
      </View>
    );
  }
}

Quiz.propTypes = propTypes;

export default Quiz;
