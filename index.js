const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const hostname = "localhost";
const port = 3000;
const morgan = require('morgan');
const app = express();
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leadersRouter = require('./routes/leaderRouter');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.use((req,res,next)=>{
//     res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');
// });

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leadersRouter);

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})