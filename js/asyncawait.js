const users = ['Juan Pérez','Lucía Gómez','Carlos López','Sara García'];

function getUser(position, timeout) {
    return new Promise((resolve, reject) => {
        if(typeof position !== 'number' || position >= users.length) {
            reject('Posición no válida'); // No hace falta return All credits to Enrique
        }
        setTimeout(() => {
            resolve({user: users[position]})
        }, timeout)
    })
}

function showMessage(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola ' +  name);
        }, 3000)
    })
}

const getData = async () => {
    try {
        let data = await getUser('pepe', 3000);
        console.log(data);
        let message = await showMessage(data.user);
        console.log(message);
    } catch(err) {
        console.error(err);
    } finally {
        console.log('Me ejecuto haya error o no')
    }
}

getData();

// const data2 = await getUser(0, 1000); Error await debe estar siempre en el contexto de una función async