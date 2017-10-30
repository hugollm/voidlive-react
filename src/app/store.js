import TrueStore from 'true-store';

var user = localStorage.getItem('user');
if (user)
    user = JSON.parse(user);

var store = new TrueStore({
    page: 'login',
    user: user,
});

saveStateEveryTime();

function saveStateEveryTime() {
    store.observer(() => {
        localStorage.setItem('user', JSON.stringify(store.get('user')));
    });
}


// setTimeout();


export default store;
