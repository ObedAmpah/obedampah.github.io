import React, { Component } from 'react';

export default class Header extends Component {

  render() {

    return (
      <div className="page-header">
        <div className="page-header-content">
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );

  };

};

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

Header.defaultProps = {
  title: 'Welcome to the FFTA'
}
