const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let base = argv.base;
let repeticiones = argv.repeticiones;

switch(argv._[0]) {
    case 'crear': {
        multiplicar.tablaMultiplicar(base,repeticiones)
            .then(archivo => console.log(`Archivo ${archivo} creado`))
            .catch(err => console.log(err)); 
        break;
    }
    case 'listar': {
        multiplicar.listarTabla(base,repeticiones);
        break;
    }
    default: {
        console.log('Comando no reconocido');
    }
}



