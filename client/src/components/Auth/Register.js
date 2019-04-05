import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
	state = {
		username: '',
		password: ''
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						name="username"
						placeholder="username"
						value={this.state.username}
						onChange={this.handleChanges}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChanges}
					/>
					<button>Register</button>
				</form>
			</div>
		);
	}

	handleChanges = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();

		axios
			.post('http://localhost:5000/api/register', this.state)
			.then(res => localStorage.setItem('token', res.data))
			.catch(err => console.log(err));
	};
}

export default Register;
