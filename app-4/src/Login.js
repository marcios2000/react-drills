import React, {Component} from 'react';




class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };
        this.handleLogin = this.handleLogin.bind(this)
    }
    
    handleUserChan(name) {
        this.setState({ username: name });

    }
    handlePassChan(password) {
        this.setState({ password: password});
    }
    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return(
            <div>
                <input type='text' onChange={ e => this.handleUserChan(e.target.value)}/>
                <input type="text" onChange={ e => this.handlePassChan(e.target.value)}/>
                <button onClick={ this.handleLogin}>LOGIN</button>
            </div>
        )

    }
    
}

export default Login;






















