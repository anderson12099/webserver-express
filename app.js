

const http = require('http');

http.createServer((req, resp) => {

    resp.writeHead(200, {'Content-type': 'application/json'});

    let salida = {
        nombre: 'Anderson',
        edad: 29,
        url: req.url
    }

    resp.write(JSON.stringify(salida));
    resp.end();
}).listen(8080);


const getNombre = () => {



}

console.log('Escuchando el puerto 8080');