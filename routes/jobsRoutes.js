const router = require('express').Router()

const Jobs = require('../models/Jobs')

router.post('/register', async (req, res) => {
  const { urlImage, title, description, link } = req.body

  if (!title) {
    res.status(422).json({ msg: 'Preencha o Título da Vaga' })
  }
  if (!description) {
    res.status(422).json({ msg: 'Preencha a Descrição da Vaga' })
  }
  if (!link) {
    res.status(422).json({ msg: 'Preencha o Link da Vaga' })
  }

  const jobs = { urlImage, title, description, link }

  try {
    await Jobs.create(jobs)
    res.status(201).json({ success: jobs })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

router.get('/', async (req, res) => {
  try {
    const jobs = await Jobs.find()
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

module.exports = router