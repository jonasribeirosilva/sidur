import React, { Component } from 'react';

var Alert = React.createClass({
  render: function() {
    return (
		<div 
		className={this.props.type ? this.props.type :'alert alert-info'}>
		{this.props.title && 
			<strong>{this.props.title}: </strong>
		}
		{this.props.children}
        </div>
    );
  }
});

export default Alert;