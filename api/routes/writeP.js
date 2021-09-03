require('../database/connection')

const potencia = require('../database/models/potencia')
const newProduct = new potencia({
	date: Date(),
	AparenteL1: 2.3,
	AparenteL2: 2.4,
	AparenteL3: 2.3,
	ActivaL1: 2.4,
	ActivaL2: 2.5,
	ActivaL3: 2.5,
	ReactivaL1: 2.5,
	ReactivaL2: 2.5,
	ReactivaL3: 2.5
})
newProduct.save((err, document) => {
	if (err) console.log(err)
	console.log(document)
})
console.log(newProduct)
