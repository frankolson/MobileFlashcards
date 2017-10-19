// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import NewCard from '../components/NewCard';
import { receiveDecks } from '../actions';
import { addCardToDeck, getDecks } from '../utils/api';

const mapStateToProps = (state, { navigation }) => ({
  deckId: navigation.state.params.id,
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  addCardToDeck,
  getDecks,
  goBack: () => navigation.goBack(),
  receiveDecks: data => dispatch(receiveDecks(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
