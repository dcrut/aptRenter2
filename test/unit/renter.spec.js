/* eslint-disable no-unused-expressions, no-underscore-dangle, func-names */

const expect = require('chai').expect;
// const sinon = require('sinon');
const Renter = require('../../dst/models/renter');

describe('Renter', () => {
  describe('constructor', () => {
    it('should create a renter object', (done) => {
      const r = new Renter({ name: 'Bob',
                             money: 1000,
                             apt: '123456789',
                             complaints: 0 });
      r.validate(err => {
        expect(err).to.be.undefined;
        expect(r.name).to.equal('Bob');
        expect(r._id).to.be.ok;
        done();
      });
    });
  });

  describe('#pay', () => {
    it('should pay rent', () => {
      const r = new Renter({ name: 'Bob',
                             money: 10000,
                             apt: '123456789',
                             complaints: 0 });
      r.pay();
      expect(r.money).to.equal(9000);
    });

    // it('should pay rent', () => {
    //   const r = new Renter({ name: 'Bob',
    //                          money: 1000,
    //                          apt: '123456789',
    //                          complaints: 0 });
    //   r.pay();
    //   expect(r.health).to.equal(100);
    // });
  });
});
