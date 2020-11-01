import React from "react"; 
import "./Login.css"; 

class Button extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}
	render() {
		return (
			<div onClick={this.props.handleClick} className="btn">
				<p>Log In</p>
			</div>
		);
	}
}

class ErrorMessage extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 11
		};
	}
	render() {
		return (
			<div className={this.props.show ? "errorMsg" : "hideErrorMsg"}>
				<h3>{this.props.msg}</h3>
			</div>
		);
	}
}

class InputField extends React.Component {
	constructor() {
		super();
		this.state = {
			type: "text"
		};
	}

	handleInput(e) {
		const value = e.target.value;
		this.props.onChange(this.props.name, value);
	}

	render() {
		return (
			<div>
				<h3>{this.props.label}</h3>
				<input
					type={this.props.type ? this.props.type : this.state.type}
					name={this.props.name}
					onChange={e => this.handleInput(e)}
					value={this.props.value}
					className="input"
				/>
			</div>
		);
	}
}

class Box1 extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}
	render() {
		return <div className="box1">{this.props.children}</div>;
	}
}

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			isFieldsEmpty: true,
			isEmailValid: false,
			emailFieldLabel: "email",
			passFieldLabel: "password",
			error: {
				email: false,
				emailField: false,
				pass: false,
				message: ""
			},			
			emailValue: "",
			passValue: ""
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleInput(field, value) {
		switch (field) {
			case "email":
				console.log(field);
				this.setState(
					{
						emailValue: value
					},
					() => this.isEmailValid()
				);
				break;
			case "password":
				console.log(field);
				this.setState(
					{
						passValue: value
					},
					() => this.isFieldsEmpty()
				);
				break;
			default:
				break;
		}
	}

	isEmailValid() {
		if (this.state.emailValue) {
			console.log(this.state.emailValue);
			let email = this.state.emailValue;
			let lastAtPos = email.lastIndexOf("@");
			let lastDotPos = email.lastIndexOf(".");

			if (
				lastAtPos < lastDotPos &&
				lastAtPos > 0 &&
				email.indexOf("@@") === -1 &&
				lastDotPos > 2 &&
				email.length - lastDotPos > 2
			) {
				console.log("here");
				this.setState(prevState => ({
					error: {
						...prevState.error,
						email: false
					}
				}));
			} else {
				console.log("ohoh");
				this.setState(prevState => ({
					error: {
						...prevState.error,
						email: true,
						message: "Invalid Email Format"
					}
				}));
				/*this.setState({
					formHasError: true,
					errorMsg: 'Invalid Email Format'
				});*/
			}
		} else {
			this.setState(prevState => ({
				error: {
					...prevState.error,
					email: false
				}
			}));
		}
	}

	isFieldsEmpty() {
		if (!this.state.emailValue || !this.state.passValue) {
            
			this.setState(prevState => ({
				error: {
					...prevState.error,
					pass: this.state.passValue === "",
					email: this.state.emailValue === "",
					message: "Please fill all details"
				}
			}));
			return true;
		} else {
			this.setState(prevState => ({
				error: {
					...prevState.error,
					pass: false
				}
			}));
			return false;
		}
	}

	handleClick() {
		console.log("Any email error(s): ", this.state.error.email);
		console.log("Any pass error(s): ", this.state.error.pass);
		if (
			!this.isFieldsEmpty() &&
			!this.state.error.email &&
			!this.state.error.pass
		)
			alert("For your saftey and my sanity this has not been implemented yet;");
	}

	render() {
		return (
			<div className="loginContainer">
				<Box1>
					<ErrorMessage
						msg={this.state.error.message}
						show={this.state.error.email || this.state.error.pass}
					/>

					<InputField
						onChange={this.handleInput}
						label={this.state.emailFieldLabel}
						name={this.state.emailFieldLabel}
						value={this.state.emailValue}
					/>
					<InputField
						onChange={this.handleInput}
						label={this.state.passFieldLabel}
						name={this.state.passFieldLabel}
						value={this.state.passValue}
						type={this.state.passFieldLabel}
					/>
					<Button handleClick={this.handleClick} />
				</Box1>
			</div>
		);
	}
}
