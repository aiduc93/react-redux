import React from "react";
import timezone from "../../data/timezone";
import map from "lodash/map";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from './../../../server/shared/validations/signup'
import TextFieldGroup from './../common/test-field-group'
import { BrowserRouter as  Redirect } from 'react-router-dom'

class SignUpForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordConfirm: "",
			timezone: "",
			errors: {},
			isLoading: false
		},
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		if (this.isValid()) {
			this.setState({errors: {}, isLoading: true});
			this.props.userSignupRequest(this.state).then(
				()=>{
					this.props.addFlashMessage({
						type: 'success',
						text: 'You signed up successfully!'
					})
					this.context.router.history.push('/');
				},
				(err) => this.setState({ errors: err.response.data, isLoading: false})
			);
		}
	}
	isValid() {
		const { errors, isValid } = validateInput(this.state);
		if (!isValid) {
			this.setState({ errors });
		}
		return isValid;
	}
	render() {
		const options = map(timezone, (val, key) => <option key = {val} value = {val}>{key} </option>);
		const { errors } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<div>

					<TextFieldGroup
						label = "Email"
						name = "email"
						value = {this.state.email}
						onChange = {this.onChange}
						error = {errors.email}
					/>
					<TextFieldGroup
						label = "User name"
						name = "username"
						value = {this.state.username}
						onChange = {this.onChange}
						error = {errors.username}
					/>
					<TextFieldGroup
						label = "Password"
						name = "password"
						value = {this.state.password}
						onChange = {this.onChange}
						error = {errors.password}
						type = "password"
					/>
					<TextFieldGroup
						label = "Password Confirm"
						name = "passwordConfirm"
						value = {this.state.passwordConfirm}
						onChange = {this.onChange}
						error = {errors.passwordConfirm}
						type = "password"
					/>

					<div className = {classnames("form-group", {"has-error": errors.timezone})}>
						<label className = "control-label">Timezone</label>
						<select className = "form-control" name = "timezone" onChange = {this.onChange} value = {this.state.timezone}>
						<option value = "" disabled>Choose your timezone</option>
						{options}
						</select>
						{ errors.timezone && <span className = "help-block">{ errors.timezone }</span>}
					</div>

					<div className = "form-group">
						<button disabled={this.state.isLoading} className = "btn btn-primary">Sign Up</button>
					</div>
				</div>
			</form>
			)
	}
}

SignUpForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	addFlashMessage: PropTypes.func.isRequired,
}
SignUpForm.contextTypes = {
	router: PropTypes.object.isRequired
}
export default SignUpForm
