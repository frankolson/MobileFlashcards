// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import Decks from '../components/Decks';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';

const mapStateToProps = ({ decks }) => ({
  decks,
});

const mapDispatchToProps = dispatch => ({
  getDecks,
  receiveDecks: data => dispatch(receiveDecks(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
