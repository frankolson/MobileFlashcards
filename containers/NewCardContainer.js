// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import NewCard from '../components/NewCard';
import { updateDeck } from '../actions';
import { addCardToDeck } from '../utils/api';

const mapStateToProps = ({ decks }, { navigation }) => ({
  deck: {
    ...decks[navigation.state.params.deck.id],
    id: navigation.state.params.deck.id,
  },
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  addCardToDeck,
  goBack: () => navigation.goBack(),
  updateDeck: data => dispatch(updateDeck(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
