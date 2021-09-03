const {Schema, model} = require('mongoose')

const corrienteSchema = new Schema({
	date: Date,
	L1: Number,
	L2: Number,
	L3: Number
})




module.exports = model('Corriente', corrienteSchema)
