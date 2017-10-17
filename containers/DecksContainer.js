// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import Decks from '../components/Decks';
import { receiveDecks } from '../actions';
import { getDeck, getDecks } from '../utils/api';

const mapStateToProps = ({ decks }) => ({
  decks: Object.keys(decks || {}).map(id => ({
    ...decks[id],
    id,
  })),
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  getDeck,
  getDecks,
  goToDeck: data => navigation.navigate('DeckMenu', data),
  receiveDecks: data => dispatch(receiveDecks(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
