import { connect } from 'react-redux';
import filterActions from '../../redux/filter/filterActions';
import * as selectors from '../../redux/selectors';
import Filter from './Filter';

const mapStateToProps = store => ({
  onChangeValue: selectors.getFilter(store),
});
const mapDispatchToProps = {
  handleChange: filterActions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
