// Vendor Assets
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

// Project Assets
import Quiz from '../components/Quiz';

const mapStateToProps = ({ decks }, { navigation }) => ({
  deck: {
    ...decks[navigation.state.params.deck.id],
    id: navigation.state.params.deck.id,
  },
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  goBack: () => navigation.dispatch(NavigationActions.back()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
