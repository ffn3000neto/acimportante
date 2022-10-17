const express = require('express')
const consign = require('consign')


const app = express()

app.use(express.urlencoded({extended:false}))

consign().include('/routes').into(app)

app.use(express.static('assets'))

const porta = process.env.PORT || 3535

module.exports = {app,porta}