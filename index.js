require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const jobsRoutes = require('./routes/jobsRoutes')

const app = express()
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Conheça a comunidade Voluntário Dev no Discord' })
})

app.use('/jobs', jobsRoutes)

const USERNAME = encodeURIComponent(process.env.DB_USER)
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@clustervd.9cfbax2.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conexão Efetuada com Sucesso')
    app.listen(3333)
  })
  .catch((error) => console.log(error))