
const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
            .command('crear', 'crea una tarea', {
                descripcion
            })
            .command('actualizar', 'Actualiza la tarea', {
                descripcion, 
                completado
            })
            .command('borrar', 'borra tarea', {
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}
