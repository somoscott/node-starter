const { response } = require('express')
const express = require('express')
const config = require('./config')
const log = config.log
import foo, { sampleProps } from './logic/templating'

const app = express()
const port = 3000

app.get('/pdf', (req, res) => {
  const retVal = foo(sampleProps)
  console.log('PDF:', retVal)
  res.send(retVal)
})

app.get('/email', (req, res) => {
  res.send('Sending pdf via email')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
