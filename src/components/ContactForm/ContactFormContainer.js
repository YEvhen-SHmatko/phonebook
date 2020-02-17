import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as selectors from '../../redux/selectors';
import ContactForm from './ContactForm';

const mapStateToProps = store => ({
  contacts: selectors.getContacts(store),
});
const mapDispatchToProps = {
  addContact: contactsActions.addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
