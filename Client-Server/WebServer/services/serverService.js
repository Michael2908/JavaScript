const express = require("express");
const app = express()
const PORT = 6113;
let server;


const startServer =() => {
   server = app.listen(PORT, () => console.log('server is online!'));
}



 const closeServer = () => server.close();;
 
const getServer = () => app;

 module.exports = {startServer, closeServer, getServer};

