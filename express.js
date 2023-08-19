const express = require('express')

const app = express()

app.get('/', (req, res) => {
      res.end("GET: get success")
} )

app.post('/Login', (req,res) => {
      res.end("POST: post success")
})

app.listen(9000, () => {
      console.log("server running successfully");
})