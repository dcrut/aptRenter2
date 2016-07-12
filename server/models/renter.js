/* eslint-disable no-use-before-define, func-names */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String,
          required: true,
          minlength: 2 },
  money: { type: Number, min: 1000, required: true },
  apartment: { type: mongoose.Schema.ObjectId, ref: 'Apartment' },
  complaints: { type: Number },
});

schema.methods.pay = function () {
  this.money = 9000;
};

module.exports = mongoose.model('Renter', schema);
