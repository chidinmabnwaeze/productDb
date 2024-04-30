const mongoose =require ('mongoose')

const productmodel = new mongoose.Schema(
    {
        name:{required:true, trim: true, type:String, lowercase: true},
        price: Number,
        length: String,
        quantity: {type:Number, required:true},
        color: String,
        location: String

    }
);

module.exports = mongoose.model("products", productmodel)