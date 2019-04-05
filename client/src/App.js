import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

class App extends Component {
	render() {
		return (
			<div className="App">
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
