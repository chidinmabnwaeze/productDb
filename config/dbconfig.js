const mongoo = require('mongoose')

let uri = 'mongodb+srv://chidinmabnwaeze:product123@cluster0.owyzcx2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

exports.dbConnect = async () => await mongoo.connect(uri)

