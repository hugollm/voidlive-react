var database = {
    user: {
        name: 'John Doe',
        age: 23,
    }
};

class Api {

    login(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email == 'john.doe@gmail.com' && password == 'pass')
                    resolve(database.user);
                else
                    reject('Invalid credentials.');
            }, 3000);
        });
    }
}

export default new Api();
