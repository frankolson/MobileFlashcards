// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import Decks from '../components/Decks';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';

const mapStateToProps = ({ decks }) => ({
  decks: Object.keys(decks).map(id => ({
    ...decks[id],
    id,
  })),
});

const mapDispatchToProps = dispatch => ({
  getDecks,
  receiveDecks: data => dispatch(receiveDecks(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
