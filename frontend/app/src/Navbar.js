import React, { Component } from 'react';

var Navbar = React.createClass({
  render: function() {
    return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
				 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				  </button>
					<a className="navbar-brand" href="/">Sidur</a>
					{this.props.children}
				</div>
				<div className="collapse navbar-collapse" id="menu1">
					<ul className="nav navbar-nav navbar-right">
						<li><a href="sidur">Sidur</a></li>
						<li><a href="tehilim">Tehilim</a></li>
					</ul>
				</div>
			</div>
        </nav>
    );
  }
});

export default Navbar;