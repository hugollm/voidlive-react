import React from 'react';

import store from 'app/store';
import { logout } from 'auth/actions';


export default class Dashboard extends React.Component {

    render() {
        return <div className="login-page page">
            <h1>Dashboard</h1>
            <h2>{store.get('user.name')}</h2>
            <a href="" onClick={this.onClickLogout.bind(this)}>Logout</a>
        </div>;
    }

    onClickLogout(e) {
        e.preventDefault();
        logout();
    }
}
