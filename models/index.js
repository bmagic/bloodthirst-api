const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  wid: { type: Number, index: true, required: true },
  character: { type: String, index: true, required: true },
  date: { type: Date, required: true },
  slot: { type: String, enum: ['head', 'neck', 'shoulder', 'chest', 'waist', 'legs', 'feet', 'wrist', 'hands', 'finger', 'trinket', 'back', 'mainHand', 'offHand', 'ranged'], required: true, index: true }
})
const Item = mongoose.model('Item', itemSchema)

const characterSchema = new mongoose.Schema({
  name: { type: String, index: { unique: true }, required: true }
})
const Character = mongoose.model('Character', characterSchema)

module.exports = {
  Item,
  Character
}
