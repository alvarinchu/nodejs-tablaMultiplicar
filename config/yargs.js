const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    repeticiones: {
        alias: 'r',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear','Tabla de multiplicar a fichero', options)
    .command('listar','Tabla de multiplicar a pantalla', options)
    .help()
    .argv;

module.exports = {
    argv
}