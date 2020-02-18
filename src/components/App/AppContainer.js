import { connect } from 'react-redux';
import '../../transition/pnotify-style.css';
import * as selectors from '../../redux/selectors';
import App from './App';

const mapStateToProps = store => ({
  contactsLength: selectors.getContactsLength(store),
  filterContactsLength: selectors.getFilterContactsLength(store),
});
export default connect(mapStateToProps, null)(App);
