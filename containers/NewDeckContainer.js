// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import NewDeck from '../components/NewDeck';
import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';

const mapDispatchToProps = dispatch => ({
  addDeck: data => dispatch(addDeck(data)),
  saveDeckTitle,
});

export default connect(null, mapDispatchToProps)(NewDeck);
