import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
        	<h3>Header</h3>
	</header>
	 <Link to="/">Home</Link>
	 <Link to="/about">About</Link>
        <div className="app-content">{this.props.children}</div>
        <footer>
        	<h3>Footer</h3>
        </footer>
      </div>
    );
  }
}
