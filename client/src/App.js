import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Register from './components/Auth/Register';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route
					path="/register"
					render={props => <Register {...props} />}
				/>
			</div>
		);
	}
}

export default App;
