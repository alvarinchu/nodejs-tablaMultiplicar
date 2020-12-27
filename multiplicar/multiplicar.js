const fs = require('fs');


let tablaMultiplicar = (base, repeticiones) => {
    return new Promise ((resolve, reject) => {

        if ((!Number(base)) || (!Number(repeticiones))) {
            reject('Parámetros no válidos');
            return;
        }

        let resultadoTabla = '';
        for (let i=1;i<=repeticiones;i++){
            resultadoTabla += `${base} * ${i} = ${base*i}\n`;
        }
    
        fs.writeFile(`FicherosResultado/tabla-${base}.txt`, resultadoTabla, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
          });
    });

 }

 let listarTabla = (base,repeticiones) => {
    for (let i=1;i<=repeticiones;i++){
        console.log(`${base} * ${i} = ${base*i}`);
    }
 }

 module.exports = {
     tablaMultiplicar,
     listarTabla
 }