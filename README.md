# JSBarCode SVG for Node

**A wrapper around JSBarcode to quickly create SVG barcodes in Node.**

## Installation

```bash
npm install @cityssm/jsbarcode-svg
```

## Usage

See the [JSBarcode Wiki](https://github.com/lindell/JsBarcode/wiki/Options) for the available options.

```javascript
import generateBarcodeSvg from '@cityssm/jsbarcode-svg'

const svg = generateBarcodeSvg('WO.25.12345', {
  displayValue: true,
  format: 'CODE39',
  height: 100,
  width: 2
})

console.log(svg)

// => "<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> ... </svg>
```
