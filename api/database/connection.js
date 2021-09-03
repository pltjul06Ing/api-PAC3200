const mongoose = require('mongoose')

const uri = 'mongodb://192.168.0.230:27017/PAC3200'
const db = mongoose.connection



mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true

})


db.on('open', _ => {
	console.log('data base conectada a ', uri)
})

db.on('error', err => {
	console.log(err)
})




