
import React, {PropTypes} from 'react';
import {observeGrid} from '../src';
import classnames from 'classnames';

export default observeGrid(React.createClass({
  displayName: 'Banner',

  propTypes: {
    breakPoint: PropTypes.number,
    children: PropTypes.any,
    className: PropTypes.string
  },

  render() {
    return (
      <div className={classnames('banner', this.props.className)}>
        <h2>FULL BLEED {this.props.breakPoint}</h2>
        {this.props.children}
      </div>
    );
  }
}));