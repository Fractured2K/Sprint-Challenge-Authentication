import React, { Component } from 'react';
import axios from 'axios';

import Joke from './Joke';
import isAuthenticated from '../components/Auth/isAuthenticated';

class JokeList extends Component {
	state = {
		jokes: []
	};

	render() {
		return (
			<div>
				{this.state.jokes.map(joke => (
					<Joke key={joke.id} {...joke} />
				))}
			</div>
		);
	}

	componentDidMount = () => {
		axios
			.get('/jokes')
			.then(res => this.setState({ jokes: res.data }))
			.catch(err => console.log(err));
	};
}

export default isAuthenticated(JokeList);
