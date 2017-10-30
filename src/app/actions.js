import store from './store';

export function changePage(page) {
    store.set('page', page);
}
