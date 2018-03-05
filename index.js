const express = require('express')

const app = express()

app.use('', express.static(__dirname + '/front/dist'))

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/front/dist/index.html')
})

console.log('DIRNAME : ', __dirname)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("connected");
});