// Vendor Assets
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Animated, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

// Project Assets
import Answer from './Answer';
import Question from './Question';
import QuizResults from './QuizResults';
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
  animatedContainer: {
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
  container: {
    flex: 1,
  },
});

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bounceValue: new Animated.Value(1),
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
    const { bounceValue } = this.state;

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 }),
    ]).start();

    this.setState({
      currentCardPosition: this.state.currentCardPosition + 1,
      score: this.state.score + 1,
    });
  }

  handleIncorrect() {
    const { bounceValue } = this.state;

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 }),
    ]).start();

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
    const { bounceValue, currentCardPosition } = this.state;
    const { cards } = this.props.deck;
    const card = cards[currentCardPosition];

    if (currentCardPosition === cards.length) {
      return (
        <Animated.View
          style={[styles.animatedContainer, { transform: [{ scale: bounceValue }] }]}
        >
          <QuizResults
            leaveQuiz={this.leaveQuiz}
            numCards={cards.length}
            resetQuiz={this.resetQuiz}
            score={this.state.score}
          />
        </Animated.View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>{`${currentCardPosition + 1}/${cards.length}`}</Text>

        <Animated.View
          style={[styles.animatedContainer, { transform: [{ scale: bounceValue }] }]}
        >
          {this.state.viewingQuestion ? (
            <Question question={card.question} viewAnswer={this.toggleQuestion} />
          ) : (
            <Answer answer={card.answer} viewQuestion={this.toggleQuestion} />
          )}
        </Animated.View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.handleIncorrect}
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
