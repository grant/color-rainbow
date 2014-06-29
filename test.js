
// Simple tests

describe('rainbow', function () {
  it('should work with the static implementation', function () {
    var Rainbow = require('./');

    Rainbow(1)[0].rgbArray().should.equal([255, 0, 0]);
  });
});