const express = require('express')

const posts = require('../usecases/posts')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const postCreated = await posts.create(req.body)
    res.json({
      succes: true,
      data: {
        post: postCreated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params // el id
    console.log(id)
    const { body } = req // opteniedno los nuevos datos
    const postUpdated = await posts.updateById(id, body)
    res.json({
      success: true,
      data: {
        post: postUpdated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params // el id
    console.log(id)
    const posrDeleted = await posts.deleteById(id)
    res.json({
      success: true,
      data: {
        post: posrDeleted
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const allPosts = await posts.getAll()
    res.json({
      success: true,
      data: {
        posts: allPosts
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
