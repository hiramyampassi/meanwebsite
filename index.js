const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err){
		console.log('No se puede conectar a la BD: ', err);
	}else{
		console.log('Conectado exitosamente a '+ config.db);
	}
});

//app.use(express.static(__dirname + '/es/dist/'));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname + '/es/src/index.html'));
   //res.send('hola mundo!!!');
});

app.listen(8080, () => {
   console.log('Escuchando puerto 8080');
});
