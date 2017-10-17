// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import NewDeck from '../components/NewDeck';
import { receiveDecks } from '../actions';
import { getDecks, saveDeckTitle } from '../utils/api';

const mapDispatchToProps = dispatch => ({
  getDecks,
  receiveDecks: data => dispatch(receiveDecks(data)),
  saveDeckTitle,
});

export default connect(null, mapDispatchToProps)(NewDeck);
