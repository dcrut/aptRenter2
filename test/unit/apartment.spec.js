/* eslint-disable no-unused-expressions, no-underscore-dangle, func-names */

const expect = require('chai').expect;
// const sinon = require('sinon');
const Apartment = require('../../dst/models/apartment');

describe('Apartment', () => {
  describe('constructor', () => {
    it('should create a apartment object', (done) => {
      const p = new Apartment({ name: 'a1',
                             sqft: 1000,
                             rooms: 2,
                             deposit: 100,
                             collectedRent: 0,
                             rentDue: 5,
                             lateFee: 10,
                             leaseEnd: '2016-08-15' });
      p.validate(err => {
        expect(err).to.be.undefined;
        expect(p.name).to.equal('a1');
        expect(p._id).to.be.ok;
        done();
      });
    });
  });

  // describe('#pay', () => {
  //   it('should pay rent', () => {
  //     const p = new Apartment({ name: 'a2',
  //                               sqft: 1000,
  //                               rooms: 2,
  //                               deposit: 100,
  //                               collectedRent: 0,
  //                               rentDue: 5,
  //                               lateFee: 10,
  //                               renter: '0234567879',
  //                               leasEnd: '2016-08-15' });
  //     p.pay();
  //     expect(p.money).to.equal(9000);
  //   });
});
