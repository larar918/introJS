/* Crea un archivo ejercicio1.js que tenga un objeto con los siguientes campos: Nombre,
apellidos, un array con los temas del bootcamp que ya conoces, si estás en busqueda
activa con un boolean y un array de objetos el cual tenga un link a alguna red social con el
nombre y link de la red social. (Con uno vale, Github por ejemplo, pero dentro de un array).*/

let usuario = {
    nombre: 'Lara',
    apellidos: 'Rondon Ergueta',
    temas : ['git','html','css','javascript'],
    busqueda_activa : true,
    red_social: [
        {
            nombre: 'GitHub',
            url: 'https://github.com/larar918'
        }
    ]
}
console.log(usuario)