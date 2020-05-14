
const { argv } = require('./config/yargs');
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./porHacer/porHacer');

//console.log(argv.descripcion);

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        let listado = getListado()
        //console.log(listado)
        
        for(let tarea of listado){
            console.log('==========Por Hacer==========='.green)
            console.log(tarea.descripcion)
            console.log('Estado: ', tarea.completado)
            console.log('=============================='.green)
        }
    break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado)
    break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
    break;

    default: 
        console.log('Comando no valido');
}




