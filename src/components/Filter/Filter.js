import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import pop from '../../transition/pop.module.css';
import Styles from './Filter.module.css';
import { ALL_ID } from '../../services/constants';
import * as filterActions from '../../redux/filter/filterActions';

const INIT_STATE = {
  input: '',
  active: false,
};
class Filter extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    ...INIT_STATE,
  };

  staticSubmit = () => {
    const { input } = this.state;
    const { onSubmit } = this.props;
    onSubmit(input);
    this.setState({ active: false });
  };

  timeoutSubmit = () => {
    let timeoutID;
    const submit = () => {
      this.staticSubmit();
      window.clearTimeout(timeoutID);
    };
    timeoutID = window.setTimeout(submit, 800);
  };

  handleChange = e => {
    const { active } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    if (active === false) {
      this.timeoutSubmit();
      this.setState({ active: true });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.staticSubmit();
  };

  handleOnClean = e => {
    e.preventDefault();
    this.setState({ ...INIT_STATE });
    const { onSubmit } = this.props;
    onSubmit('');
  };

  render() {
    const { input } = this.state;
    return (
      <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
        <section className={Styles.section__filter}>
          <form className={Styles.form__filter} onSubmit={this.handleSubmit}>
            <label htmlFor={ALL_ID.htmlFor} className={Styles.form__title}>
              <h4>Fined contacts by name</h4>
              <span className={Styles['form__input-wrap']}>
                <input
                  className={Styles.form__input}
                  onInput={this.mySubmit}
                  onChange={this.handleChange}
                  value={input}
                  name="input"
                  type="text"
                  placeholder="Input fined contacts"
                />
                {input.length > 0 && (
                  <div
                    role="button"
                    tabIndex={0}
                    className={Styles.formInputBtn}
                    onClick={this.handleOnClean}
                    onKeyPress={() => {}}
                  >
                    <i className="large material-icons">clear</i>
                  </div>
                )}
              </span>
            </label>
          </form>
        </section>
      </CSSTransition>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(filterActions.onSubmit(value)),
});
export default connect(null, mapDispatchToProps)(Filter);
