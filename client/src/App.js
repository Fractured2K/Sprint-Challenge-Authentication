import React, { Component, Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavLink to="/">Home</NavLink>{' '}
				{localStorage.getItem('token') ? (
					<Fragment>
						<NavLink to="/jokes">Jokes</NavLink>{' '}
					</Fragment>
				) : (
					<Fragment>
						<NavLink to="/register">Register</NavLink>{' '}
						<NavLink to="/Login">Login</NavLink>{' '}
					</Fragment>
				)}
				<Route
					path="/register"
					render={props => <Register {...props} />}
				/>
				<Route path="/login" render={props => <Login {...props} />} />
			</div>
		);
	}
}

export default App;
