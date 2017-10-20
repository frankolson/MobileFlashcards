// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import NewDeck from '../components/NewDeck';
import { addDeck } from '../actions';
import { saveDeck } from '../utils/api';

const mapDispatchToProps = (dispatch, { navigation }) => ({
  goHome: () => navigation.navigate('Decks'),
  addDeck: data => dispatch(addDeck(data)),
  saveDeck,
});

export default connect(null, mapDispatchToProps)(NewDeck);
