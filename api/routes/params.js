const {Router} = require('express')
const router = Router()
require('../database/connection')
const tension = require('../database/models/tension')
const corriente = require('../database/models/corriente')
const potencia = require('../database/models/potencia')
let fechaActual = new Date()

async function allValue(model) {
	const listModel = await model.find({
		date: {
			$gte: ayer
		}
	})
	return listModel

}

const calcDias = (fecha, dias) => {
	fecha.setDate(fecha.getDate() + dias)
	return fecha

}
let ayer = calcDias(fechaActual, -1)


router.get('/tension', (req, res) => {
	tension.find({
		date: {
			$gte: ayer
			//	$gte: new Date("2021-08-30T00:00:00.000Z")
		}
	})
		.exec()
		.then(x => res.status(200).send(x))

})

router.get('/corriente', (req, res) => {

	corriente.find({
		date: {
			$gte: ayer
		}
	})
		.exec()
		.then(x => res.status(200).send(x))


})

router.get('/potencia', (req, res) => {

	allValue(potencia)
		.then((listModel) => {res.json(listModel)})
		.catch((err) => {console.log(err)})

})

router.get('/', (req, res) => {
	res.json({"name": "Sentron PAC3200"})
})


module.exports = router



