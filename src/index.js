const { response } = require('express')
const express = require('express')
const config = require('./config')
const log = config.log
import getHtml from './logic/templating'
import sampleData from './logic/mockData'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const retVal = getHtml(sampleData)
  console.log('PDF:', retVal)
  res.send(retVal)
})

app.get('/email', (req, res) => {
  res.send('Sending pdf via email')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
