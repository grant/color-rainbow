color-rainbow
=============

Easily generate rainbow colors.

```sh
npm install color-rainbow
```

## Example

```js
var Rainbow = require('color-rainbow');

var numColors = 100;
var rainbowColors = Rainbow.create(numColors);

var html = '';
for (var i = 0; i < numColors; ++i) {
  var color = rainbowColors[i].hexString()
  html += '<div style:"background-color:"' + color + '"/>';
}
```

## Docs

Note: All colors are stored using [color](https://www.npmjs.org/package/color).

### Rainbow.create(numberOfColors)

Gets a list of colors that creates a full rainbow cycle.

`numberOfColors`: The number of colors that make up a full rainbow cycle (from red, through the colors, then back to red)

```js
var Rainbow = require('color-rainbow');

var colors = Rainbow.create(100);

for (var i = 0; i < colors.length; ++i) {
  console.log(colors[i].rgb());
}
```

### new Rainbow(numberOfColors)

Creates a new rainbow object. This is useful when we want to store individual states of a rainbow and get the next color in the rainbow on demand.

`numberOfColors`: The number of colors that make up a full rainbow cycle (from red, through the colors, then back to red)

### .next()

Gets the next color of the rainbow wave

```js
var Rainbow = require('color-rainbow');

var myRainbow = new Rainbow(6);

var red = myRainbow.next()
var orange = myRainbow.next()
var yellow = myRainbow.next()
var green = myRainbow.next()
var blue = myRainbow.next()
var purple = myRainbow.next()
// The next myRainbow.next() would be red
```

## Testing

Run `npm test`.