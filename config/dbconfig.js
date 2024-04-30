const mongoo = require('mongoose')

let uri = 'mongodb+srv://chidinmabnwaeze:product123@cluster0.owyzcx2.mongodb.net/'

exports.dbConnect = async () => await mongoo.connect(uri)

