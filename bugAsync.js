/* Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos a
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado bugAsync.js con la solución. */

const obtenerUsuario = (id) => {  
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if (id === 1) {
                usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario);
            }
            else{
                reject('Usuario no encontrado')
            }
        },2000)
    }) 
}

obtenerUsuario(1)
.then(usuario => console.log(usuario))
.catch( error => console.log(error))