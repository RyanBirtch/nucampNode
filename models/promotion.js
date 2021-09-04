const mongoose = require("mongoose")
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean
    },
    cost:{
        type: Currency,
        required: true
    },
    description:{
        type: String,
        required: true
    }

},
{
    timestamps: true
})

const Promotions = mongoose.model(promotionSchema)
module.exports = Promotions