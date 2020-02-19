import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import filterActions from '../../redux/filter/filterActions';
import * as selectors from '../../redux/selectors';
import ContactList from './ContactList';

const mapStateToProps = store => ({
  filterContacts: selectors.getFilterContacts(store),
  contacts: selectors.getContacts(store),
});
const mapDispatchToProps = {
  addContact: contactsActions.addContact,
  removeContact: contactsActions.removeContact,
  handleChange: filterActions,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
