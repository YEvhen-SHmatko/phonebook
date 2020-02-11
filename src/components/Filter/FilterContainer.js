import { connect } from 'react-redux';
import filterActions from '../../redux/filter/filterActions';
import * as selectors from '../../redux/selectors';
import Filter from './Filter';

const mapStateToProps = store => ({
  input: selectors.getFilter(store),
});
const mapDispatchToProps = dispatch => ({
  handleChange: value => dispatch(filterActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
