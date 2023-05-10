require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())