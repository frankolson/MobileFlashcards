// Vendor Assets
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

// Project Assets
import DeckMenu from '../components/DeckMenu';

const mapStateToProps = ({ decks }, { navigation }) => ({
  deck: {
    ...decks[navigation.state.params.deck.id],
    id: navigation.state.params.deck.id,
  },
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  navigate: data => navigation.dispatch(NavigationActions.navigate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckMenu);
