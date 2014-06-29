
// Simple tests

describe('rainbow', function () {
  describe('Rainbow(numberOfColors)', function () {
    it('should work with simple case', function () {
      var Rainbow = require('./');
      Rainbow(1)[0].rgbArray().should.eql([255, 0, 0]);
    });

    it('should work with semi-complex case', function () {
      var Rainbow = require('./');
      var rainbow = Rainbow(3);

      rainbow.length.should.equal(3);

      rainbow[0].rgbArray().should.eql([255, 0, 0]);
      rainbow[1].rgbArray().should.eql([0, 0, 255]);
      rainbow[2].rgbArray().should.eql([0, 255, 0]);
    });

    it('should work with semi-complex case', function () {
      var Rainbow = require('./');
      var rainbow = Rainbow(255);

      rainbow.length.should.equal(255);

      for (var i in rainbow) {
        console.log(rainbow[i].rgbArray());
      }

      rainbow[0].rgbArray().should.eql([255, 0, 0]);
      rainbow[1].rgbArray().should.eql([0, 0, 255]);
      rainbow[2].rgbArray().should.eql([0, 255, 0]);
    });
  });
});