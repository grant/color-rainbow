
// A rainbow generator

var Color = require('color');
var MAX_RGB = 255;
var NUM_SECTIONS = 6;

// Gets the rainbow color given a normalized index (0-1)
// Returns a color
var getColor = function (index) {
  var section = Math.floor(index * NUM_SECTIONS);
  var start = (index - (section/NUM_SECTIONS)) * NUM_SECTIONS; // index from start of section (0-1)
  var end = 1 - start; // index from end of section (0-1)

  var colorArray;// the rgb color array with colors that range from 0-1.
  switch (section) {
    case 0:
      colorArray = [1, 0, start];
      break;
    case 1:
      colorArray = [end, 0, 1];
      break;
    case 2:
      colorArray = [0, start, 1];
      break;
    case 3:
      colorArray = [0, 1, end];
      break;
    case 4:
      colorArray = [start, 1, 0];
      break;
    case 5:
      colorArray = [1, end, 0];
      break;
  }

  // Return the color
  return new Color().rgb(colorArray.map(function(value) {
    return value * MAX_RGB;
  }));
};

var Rainbow = function (numberOfColors) {

  var colorIndex = 0;

  this.next = function () {
    return getColor(colorIndex++/numberOfColors % 1);
  };
};

Rainbow.create = function (numberOfColors) {
  if (numberOfColors < 0) {
    throw 'Number of colors must be non-negative';
  } else if (typeof numberOfColors == 'undefined') {
    throw 'You must have a number of colors per rainbow cycle.';
  } else {
    var rainbow = [];
    for (var i = 0; i < numberOfColors; ++i) {
      rainbow[i] = getColor(i/numberOfColors);
    }
    return rainbow;
  }
};

module.exports = Rainbow;