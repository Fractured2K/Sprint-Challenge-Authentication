import React, { Component } from 'react';
import isAuthenticated from '../components/Auth/isAuthenticated';
class JokeList extends Component {
	render() {
		return (
			<div>
				<h1>hello</h1>
			</div>
		);
	}
}

export default isAuthenticated(JokeList);
