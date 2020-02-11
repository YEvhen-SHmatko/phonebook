import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as selectors from '../../redux/selectors';
import ContactList from './ContactList';

const mapStateToProps = store => ({
  filterContacts: selectors.getFilterContacts(store),
  сontacts: selectors.getContacts(store),
});
const mapDispatchToProps = dispatch => ({
  addContact: data => dispatch(contactsActions.addContact(data)),
  removeContact: id => dispatch(contactsActions.removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
