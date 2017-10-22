// Vendor Assets
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

// Project Assets
import Decks from '../components/Decks';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';

const mapStateToProps = ({ decks }) => ({
  decks: Object.keys(decks || {}).map(id => ({
    ...decks[id],
    id,
  })),
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  getDecks,
  navigate: data => navigation.dispatch(NavigationActions.navigate(data)),
  receiveDecks: data => dispatch(receiveDecks(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
