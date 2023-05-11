const mongoose = require('mongoose')

const Jobs = mongoose.model('Jobs', {
  urlImage: String,
  title: String,
  description: String,
  link: String,
})

module.exports = Jobs