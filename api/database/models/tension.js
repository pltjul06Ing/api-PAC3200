const {Schema, model} = require('mongoose')

const tensionSchema = new Schema({

	date: Date,
	L1N: Number,
	L2N: Number,
	L3N: Number,
	L1L2: Number,
	L2L3: Number,
	L3L1: Number
})




module.exports = model('tension', tensionSchema)
