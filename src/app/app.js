import React from 'react';

import store from './store';
import LoginPage from 'auth/login-page';
import SignupPage from 'auth/signup-page';
import Dashboard from 'dashboard/dashboard';

import './app.scss';


export default class App extends React.Component {

    componentDidMount() {
        console.log('componentDidMount');
        this.observer = store.observer(this.forceUpdate.bind(this));
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        this.observer.release();
    }

    render() {
        console.log('render');
        let { page, user } = store.get();
        if (user)
            return <Dashboard/>;
        if (page == 'login')
            return <LoginPage/>;
        if (page == 'signup')
            return <SignupPage/>;
    }
}
