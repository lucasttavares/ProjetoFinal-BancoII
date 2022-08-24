require('dotenv').config();
const app = require('./server');
require('./database/db');

app.listen(process.env.API_PORT, ()=>{
    console.log("App rodando na porta " + process.env.API_PORT)
})