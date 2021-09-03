require('../database/connection')
const potencia = require('../database/models/potencia')


async function allTension() {
	const listTension = await potencia.find()
	return listTension

}
allTension()
	.then((listProduct) => {console.log(listProduct)})
	.catch((err) => {console.log(err)})


