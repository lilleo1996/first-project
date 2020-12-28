const express = require('express')
var bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express()

const usersRoute = require('./routes/users.route')
const loginRoute = require('./routes/login.route')

const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// cors
app.use(cors());

app.get('/', (req, res) => {
  res.render('home', {title: 'Home'})
})

app.get('/read-html-file', (req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.write('File not found')
    } else {
      res.write(data)
    }
    res.end()
  });``
})

app.use('/users', usersRoute)

app.use('/login', loginRoute)

app.get('*', (req, res) => {
  res.send('<h2 style="color: red">Not found</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})