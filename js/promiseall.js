// Empleo de fetch para peticiones http
// Utiliza promesas para la resolución de las response de las request que realiza

const endpoint = 'https://jsonplaceholder.typicode.com/';

fetch(endpoint + 'users/2')  // por defecto fecth usa peticiones get
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Promise all 

const getData = async (path) => {
    const response = await fetch(endpoint + path);
    return response.json();
} 

const showMessage = (name) => {
    return new Promise((resolve, reject) => {
        if (typeof name !== 'string') {
            reject('Nombre no válido')
        }
        setTimeout(() => {
            resolve('Hola ' +  name);
        }, 3000)
    })
}

const getAllData = async () => {
    // const albums = await getData('albums');
    // const posts = await getData('posts');
    const data = await Promise.all([getData('albums'),showMessage(12)]); // con AllSettled se captura el estado de cada petición
    console.log(data);
}

getAllData();