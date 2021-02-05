require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

//crear servidor exprees
const app = express();

//configurar cors
app.use(cors())

//Database 
dbConnection();

//Rutas
//user: ale pass:root
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: "Funcionando..."
    })

});

app.listen(process.env.PORT, () => {
    console.log("Running in: " + process.env.PORT);
});