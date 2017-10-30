import api from 'app/api';
import store from 'app/store';

export function requestLogin(email, password) {
    console.log('requestLogin');
    store.set('login.loading', true);
    let request = api.login(email, password);
    request.then(loginOk);
    request.catch(loginError);
}

function loginOk(user) {
    console.log('loginOk');
    store.set('user', user);
    store.set('login.loading', false);
}

function loginError(message) {
    console.log('loginError');
    store.set('login.loading', false);
    alert(message);
}

export function logout() {
    console.log('logout');
    store.set('user', null);
}
