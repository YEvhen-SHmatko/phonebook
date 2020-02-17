import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as selectors from '../../redux/selectors';
import ContactList from './ContactList';

const mapStateToProps = store => ({
  filterContacts: selectors.getFilterContacts(store),
  сontacts: selectors.getContacts(store),
});
const mapDispatchToProps = {
  addContact: contactsActions.addContact,
  removeContact: contactsActions.removeContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
