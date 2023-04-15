const express = require('express')
const app = express();
const fs = require('fs')
const port = 4000

const videoStream = require('./videoStream')

videoStream.acceptConnections(app, {
        width: 800,
        height: 480,
        fps: 10,
        encoding: 'JPEG',
        quality: 7
    }, 
    '/stream.mjpg', true)

app.use(express.static(__dirname+'/public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
