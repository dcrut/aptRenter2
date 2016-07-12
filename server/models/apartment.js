/* eslint-disable no-use-before-define, func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String,
          required: true,
          minlength: 2,
          validate: { validator: duplicateAptNameValidator } },
  sqft: { type: Number, min: 500, max: 2500 },
  rooms: { type: Number, min: 1, max: 4 },
  rent: { type: Number, min: 1000 },
  deposit: { type: Number, min: 50 },
  collectedRent: { type: Number, min: 0 },
  rentDue: { type: Number, min: 1, max: 31 },
  lateFee: { type: Number, min: 10 },
  toy: { type: String, enum: ['Bones', 'Frisbee'] },
  renter: { type: mongoose.Schema.ObjectId, ref: 'Renter' },
  leaseEnd: { type: Date, required: true },
});

// schema.methods.feed = function () {
//   this.health = this.health > 90 ? 100 : this.health + 10;
// };

function duplicateAptNameValidator(name, cb) {
  this.model('Apartment').find({ name }, (err, apts) => {
    cb(!apts.length);
  });
}

module.exports = mongoose.model('Apartment', schema);
