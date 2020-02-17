import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import pop from '../../transition/pop.module.css';
import Styles from './Notice.module.css';

const Notice = ({ children }) => {
  return (
    <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
      <div className={Styles.notice}>
        <span className={Styles.notice__text}>{children}</span>
      </div>
    </CSSTransition>
  );
};
Notice.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Notice;
