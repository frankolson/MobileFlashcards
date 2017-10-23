// Vendor Assets
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Project Assets
import Answer from './Answer';
import Question from './Question';
import { black } from '../utils/colors';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  buttonText: {
    fontSize: 20,
  },
});

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCardPosition: 0,
      score: 0,
      viewingQuestion: true,
    };

    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
    this.leaveQuiz = this.leaveQuiz.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
    this.toggleQuestion = this.toggleQuestion.bind(this);
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

  toggleQuestion() {
    this.setState({
      viewingQuestion: !this.state.viewingQuestion,
    });
  }

  render() {
    const { currentCardPosition } = this.state;
    const { cards } = this.props.deck;
    const card = cards[currentCardPosition];

    return (
      <View style={styles.container}>
        <Text>{`${currentCardPosition + 1}/${cards.length}`}</Text>

        {this.state.viewingQuestion ? (
          <Question question={card.question} viewAnswer={this.toggleQuestion} />
        ) : (
          <Answer answer={card.answer} viewQuestion={this.toggleQuestion} />
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.handleCorrect}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.handleCorrect}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Quiz.propTypes = propTypes;

export default Quiz;
