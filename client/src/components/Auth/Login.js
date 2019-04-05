import React, { Component } from 'react';

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
}

export default Login;
