import { connect } from 'react-redux';
import '../../transition/pnotify-style.css';
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as selectors from '../../redux/selectors';
import PhoneBook from './PhoneBook';

const mapStateToProps = store => ({
  contactsLength: selectors.getContactsLength(store),
  filterContactsLength: selectors.getFilterContactsLength(store),
});
const mapDispatchToProps = dispatch => ({
  setContactsWithLocalStorage: data =>
    dispatch(contactsActions.setContactsWithLocalStorage(data)),
  removeContact: id => dispatch(contactsActions.removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
