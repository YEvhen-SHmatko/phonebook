import { connect } from 'react-redux';
import '../../transition/pnotify-style.css';
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as selectors from '../../redux/selectors';
import App from './App';

const mapStateToProps = store => ({
  contactsLength: selectors.getContactsLength(store),
  filterContactsLength: selectors.getFilterContactsLength(store),
});
const mapDispatchToProps = {
  setContactsWithLocalStorage: contactsActions.setContactsWithLocalStorage,
  removeContact: contactsActions.removeContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
