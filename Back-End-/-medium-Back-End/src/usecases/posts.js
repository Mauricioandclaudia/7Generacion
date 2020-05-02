const Post = require('../models/posts')

function create (postObject) { // autor nombre del autor wtvc etv
  return Post.create(postObject) // retrna una promesa
}

function getAll () {
  return Post.find()
}

function deleteById (id) {
  return Post.findByIdAndRemove(id)
}

function updateById (id, newPostOnjectData) {
  return Post.findByIdAndUpdate(id, newPostOnjectData) // retorna una promesa
}

module.exports = {
  create,
  getAll,
  deleteById,
  updateById
}

// acciones que vamos hacer con el modelo en este caso con un post
