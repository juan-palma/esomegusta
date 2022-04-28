const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewar
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Nuestro primer WS Get
app.get('/', (req, res) => {
	res.json({"Titulo":"Hola mundo"});
	console.log(req);
});

//Iniciando el servior
app.listen(app.get('port'), ()=>{
	console.log(`Server listening on port ${app.get('port')}`);
});