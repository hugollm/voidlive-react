import React from 'react';

import store from 'app/store';
import { changePage } from 'app/actions';
import { requestLogin } from './actions';
import './auth.scss';


export default class LoginPage extends React.Component {

    constructor() {
        super();
        this.state = {email: '', password: ''};
    }

    render() {
        var { email, password } = this.state;
        let spinner = store.get('login.loading') ? 'Loading...' : '';
        return <div className="login-page page">
            <h1>Login</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
                <div>
                    <label>Email</label> <br/>
                    <input type="email" name="email" value={email}
                        onChange={this.bindValue.bind(this)}/>
                </div>
                <div>
                    <label>Password</label> <br/>
                    <input type="password" name="password" value={password}
                        onChange={this.bindValue.bind(this)}/>
                </div>
                <button type="submit">Login</button> {spinner}
            </form>
            <a href="" onClick={this.onClickSignup.bind(this)}>Signup</a>
        </div>;
    }

    bindValue(e) {
        var state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onClickSignup(e) {
        e.preventDefault();
        changePage('signup');
    }

    onSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state;
        requestLogin(email, password);
    }
}
