import React from 'react';
import { changePage } from 'app/actions';


export default class SignupPage extends React.Component {

    render() {
        return <div className="signup-page page">
            <h1>Signup</h1>
            {this.renderForm()}
            <a href="" onClick={this.onClickLogin.bind(this)}>Login</a>
        </div>;
    }

    renderForm() {
        return <form>
            <div>
                <label>Email</label> <br/>
                <input type="email"/>
            </div>
            <div>
                <label>Password</label> <br/>
                <input type="password"/>
            </div>
            <div>
                <label>Password</label> <br/>
                <input type="password"/>
            </div>
            <button type="submit">Signup</button>
        </form>;
    }

    onClickLogin(e) {
        e.preventDefault();
        changePage('login');
    }
}
