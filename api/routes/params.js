const {Router} = require('express')
const router = Router()
require('../database/connection')
const tension = require('../database/models/tension')
const corriente = require('../database/models/corriente')
const potencia = require('../database/models/potencia')

async function allValue(model, date) {
	let range//hace referencia si los datos a devolver van a ser del ultimo dia u hora 
	if (date == 'hora') {
		range = lastHour(new Date())
	} else {
		range = lastDay(new Date())
	}
	const listModel = await model.find({
		date: {
			$gte: range
		}
	})
	console.log(range)
	return listModel

}

const lastDay = (date) => {
	date.setDate(date.getDate() - 1)
	return date
}
const lastHour = (date) => {
	date.setHours(date.getHours() - 1)
	return date
}

router.get('/tension', (req, res) => {
	tension.find({
		date: {
			$gte: lastDay(new Date())
			//	$gte: new Date("2021-08-30T00:00:00.000Z")
		}
	})
		.exec()
		.then(x => res.status(200).send(x))

})

router.get('/corriente', (req, res) => {

	corriente.find({
		date: {
			$gte: lastDay(new Date())
		}
	})
		.exec()
		.then(x => res.status(200).send(x))


})

router.get('/potencia', (req, res) => {
	const prueba = req.headers.prueba
	allValue(potencia, prueba)
		.then((listModel) => {res.json(listModel)})
		.catch((err) => {console.log(err)})

})

router.get('/', (req, res) => {
	res.json({"name": "Sentron PAC3200"})
})


module.exports = router



