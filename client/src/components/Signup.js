import React, { Component } from "react";
import '../App.css';
import FormErrors from '../FormErrors.js'
import LibiqLogo from '../images/LibiqLogo2.jpg';
import LibiqWordLogo from '../images/LibiqWordLogo.png';

class Signup extends Component {
    state = {
            name: "",
            email: "",
            password: "",
            formErrors: {name: '', email: '', password: ''}, 
            nameValid: false,    
            emailValid: false,
            passwordValid: false,
            formValid: false
            };

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value},
                        () => { this.validateField(name, value) });
        }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
            case 'name':
            nameValid = value.length >= 6;
            fieldValidationErrors.name = nameValid ? '' : ' is invalid';
            break;
            case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
            case 'password':
            passwordValid = value.length >= 8;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
            default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        nameValid: nameValid,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                        }, this.validateForm);
        }
    
        validateForm() {
        this.setState({formValid: 
            this.state.nameValid && 
            this.state.emailValid && 
            this.state.passwordValid });
        }
    
        errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
        }
        

    render(){
        return(
            <div>
                
            <div className="imgdiv">
            <a href="/"><center><img className="signuplogo fadeInDown animated" src={LibiqLogo} width="100" height="100" alt="Home"/></center></a><br />
            <center><img className="signuplogo fadeInDown animated" src={LibiqWordLogo} width="176" height="100" alt="Word"/></center>
            </div>

            <div className="formdiv fadeInDown animated">

                <form onSubmit={this.handleSubmit}>
                
                    <div className={`col ${this.errorClass(this.state.formErrors.name)}`}>
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Login Name"
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleInput} />
                    <br />
                    </div> 

                    <div className={`col ${this.errorClass(this.state.formErrors.email)}`}>
                    <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Email"
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleInput}  />
                    <br />
                    </div>

                    <div className={`col ${this.errorClass(this.state.formErrors.password)}`}>
                    <input 
                    type="password" 
                    class="form-control" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}  />
                    <br />
                    </div> 

                    <div className="col">
                    <input 
                    type="password" 
                    class="form-control" 
                    placeholder="Confirm Password"
                    name= "confirmPassword"
                    value={this.state.confirmPassword} 
                    onChange={this.handleInput} />
                    <small id="passwordHelpBlock" class="form-text text-muted">
                    Your password must be 8-20 characters long.
                    </small>

                    <br />
                    <center><button 
                    disabled={!this.state.formValid} 
                    type="button" 
                    class="btn">Sign Up</button>
                    <br/>
                    <br/>
                    <h6>Already have an account? <a href="/signin">Log in Here</a></h6></center>
                    </div>
                
            </form>
            
            </div>
            <br />
            <br />
        </div>

        )
    }
}


export default Signup;