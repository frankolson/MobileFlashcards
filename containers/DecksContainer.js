// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import Decks from '../components/Decks';
import { receiveDecks } from '../actions';

const mapStateToProps = ({ decks }) => ({
  decks,
});

const mapDispatchToProps = dispatch => ({
  receiveDecks: data => dispatch(receiveDecks(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
