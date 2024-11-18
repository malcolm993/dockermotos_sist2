const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const motoController = require('./controller');
const Moto = require('./moto');
require('dotenv').config();

//Conexión a mongo:
const URL_Mongo = process.env.URL_Mongo;
mongoose.connect(URL_Mongo,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error al conectar con la BD: '));
db.once('open', ()=>{
    console.log('SE CONECTÓ... WIII');
});

//____________________________________________

//Configuración de Express con el middleware:
const app = express();

//Configuración del puerto:
const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server en ejecución en el puerto ${PORT}`);
});

app.get('/', (req,res)=>{
    res.send('La marrana llegó a la pocilga.')
});

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rutas CRUD:
app.get('/motos/all', motoController.getMotos);
app.post('/motos/create', motoController.createMoto);
app.get('/motos/find/:patente', motoController.getMotoByPatente);
app.put('/motos/update/:patente', motoController.updateMoto);
app.delete('/motos/delete/:patente', motoController.deleteMoto);

