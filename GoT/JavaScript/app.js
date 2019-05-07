'use strict'

const express = require('express')
const WebSocket = require('ws')
const app = express()
const path = require('path')

const wss = new WebSocket('ws://10.69.1.156:8080')
let bitcoinValue = 0

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, '../layouts'))

app.get('/', (req, res) => {
    res.render('index', {
        bitcoinValue
    })
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})

app.get('/bitcoin', (req, res) => {
    res.send(200, JSON.stringify({
        bitcoinValue
    }))
})

wss.on('message', (data) => {
    wss.send('bitcoin-cours')
    bitcoinValue = data
})