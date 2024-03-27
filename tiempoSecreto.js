const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('El servidor está inicializdo en el puerto http://localhost:3000')
});

app.use('/Tiempo', (req, res, next) => {
    const Auth = req.header('Authorization');
    Auth ? next() : res.send ('¿Quién es?');
});

app.get('/Tiempo', (req, res) => {
    const tiempo = { time: Date.now() };
    res.send(tiempo);
});
