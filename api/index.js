const express = require('express')
const app = express()
const cors = require('cors')//cors permite acceder a la api desde cualquier dominio
app.set('port', 4100)

app.use(cors())


app.get('/', (req, res) => {
	res.send({status: 'todo bien'})
})

//router
app.use('/pac3200', require('./routes/params'))


app.listen(app.get('port'), () => {
	console.log('server ok')
	let date = new Date
	console.log(date.toISOString())


})
