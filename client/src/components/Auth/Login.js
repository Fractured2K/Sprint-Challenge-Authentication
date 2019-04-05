import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
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
					<button>Login</button>
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
			.post('http://localhost:5000/api/login', this.state)
			.then(res => {
				localStorage.setItem('token', res.data);

				this.props.history.push('/jokes');

				this.setState({
					username: '',
					password: ''
				});
			})
			.catch(err => console.log(err));
	};
}

export default Login;
