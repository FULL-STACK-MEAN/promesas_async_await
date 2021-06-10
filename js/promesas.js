const users = ['Juan Pérez','Lucía Gómez','Carlos López','Sara García'];

function getUser(position) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({user: users[position]})
        }, 2000)
    })
}

function showMessage(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola ' +  name);
        }, 3000)
    })
}

getUser(1)
    .then(data => {
        console.log(data);
        return showMessage(data.user)
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

console.log('Continua el hilo de ejecución...');