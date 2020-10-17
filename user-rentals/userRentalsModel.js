const db = require('../database/dbConfig')

function getRentals() {
    return db("rent_items");
  }
function getRental(id){
  return db("rent_items")
  .where("id", id)
  .first()
}

function updateRental(id, changes) {
  return db("rent_items")
    .where("id", id)
    .update(changes)
  }

function removeRental(id) {
  return db("rent_items")
    .where("id", id)
    .del();
  }
function postRental(post){
  return db("rent_items")
    .insert(post)
}

  module.exports = {getRentals, removeRental, updateRental, getRental, postRental}