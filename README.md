# JSBarCode SVG for Node

[![DeepSource](https://app.deepsource.com/gh/cityssm/node-jsbarcode-svg.svg/?label=active+issues&show_trend=true&token=V1TQyZkeEvQ-QLzeY5JCTN9h)](https://app.deepsource.com/gh/cityssm/node-jsbarcode-svg/)
[![codecov](https://codecov.io/gh/cityssm/node-jsbarcode-svg/graph/badge.svg?token=WAPJ43P5A5)](https://codecov.io/gh/cityssm/node-jsbarcode-svg)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=cityssm_node-jsbarcode-svg&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=cityssm_node-jsbarcode-svg)

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

Once generated, you can save it to a file, or output it directly to a webpage
using your prefered templating language.

```ejs
<div class="barcodeContainer">
  <%- svg %>
</div>
```

## Related Projects

[**PDF Puppeteer**](https://www.npmjs.com/package/@cityssm/pdf-puppeteer)<br />
Converts URLs and HTML to PDFs using Puppeteer.

[**Sunrise Cemetery Management System (CMS)**](https://github.com/cityssm/sunrise-cms)<br />
A completely free, open source, web-based application to assist cemetery managers with managing their cemetery records.
