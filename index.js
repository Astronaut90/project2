const express = require('express') // require()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Express.js!')
})

app.get('/about', (req, res) => {
  res.send('Hello Express.js! Now I am in about section')
})

app.get('/contact', (req, res) => {
  res.send('You can contact me on my Mobile number')
})

app.get('/Express_Tutorial', (req, res) => {
  res.send('You can contact me for any help in Express.js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






















