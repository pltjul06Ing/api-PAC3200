const {Schema, model} = require('mongoose')

const potenciaSchema = new Schema({

	date: Date,
	AparenteL1: Number,
	AparenteL2: Number,
	AparenteL3: Number,
	ActivaL1: Number,
	ActivaL2: Number,
	ActivaL3: Number,
	ReactivaL1: Number,
	ReactivaL2: Number,
	ReactivaL3: Number
})




module.exports = model('potencia', potenciaSchema)
