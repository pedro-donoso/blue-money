const axios = require('axios');
const fs = require('fs');
const myArguments = process.argv;
const direction = `https://mindicador.cl/api/${myArguments[4]}`
axios.get(direction)
    .then((response) => {
        const change = response.data.serie[0];
        myArchive(`${myArguments[2]}.${myArguments[3]}`, change, myArguments[4], myArguments[5]);
    })
    .catch((error) => {
        console.log("Problem: ", error);
    })


function myArchive(name, changeType, change, pesos) {
    myMessage = "";
    myMessage += `Al día de hoy: ${changeType.fecha}\n`;
    myMessage += `Pesos que serán convertidos: ${pesos} pesos\n`
    myMessage += `Se convertiran a "${change}" por un total de: ${parseFloat(pesos) / parseFloat(changeType.valor)}.\n`
    myMessage += `Utilizando una tasa de cambio: ${changeType.valor} pesos por ${change}\n`
    myMessage += `==Fin de la transacción==`

    fs.writeFile(name, myMessage, 'utf8', (err) => {
        if (err) {
            console.log("Problem");
            throw err;
        };
        console.log("Éxito");
        console.log(myMessage);
    });
}