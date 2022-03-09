const express    = require('express');
const { listen } = require('express/lib/application');
const app        = express();
const db         = require('./db/connection.js')
const bodyParser = require('body-parser')


const PORT = 3000;

app.listen(PORT, function() {
  console.log(`O express está rodando na porta ${PORT}`)
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

//db connection
db
  .authenticate()
  .then(() => {
    console.log('Succesfull Connected to the database');
  })
  .catch(err => {
    console.log('Ocorreu um erro ao conectar', err)
  });

//routes
app.get('/', (req, res) => {
  res.send('Esta funcionando 2');
});

//books routes
app.use('/books', require('./routes/books'));
