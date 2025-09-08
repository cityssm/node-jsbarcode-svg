import { DOMImplementation, XMLSerializer } from '@xmldom/xmldom'
import JsBarcode from 'jsbarcode'

/**
 * Generate a barcode SVG image.
 * @param barcodeString The string to encode in the barcode
 * @param options {@link https://github.com/lindell/JsBarcode/wiki/Options JsBarcode Options}
 * @returns The generated SVG as a string
 */
export default function generateSvg(
  barcodeString: string,
  options: Omit<JsBarcode.Options, 'xmlDocument'>
): string {
  const xmlSerializer = new XMLSerializer()

  const barcodeDocument = new DOMImplementation().createDocument(
    'http://www.w3.org/1999/xhtml',
    'html'
  )
  const svgNode = barcodeDocument.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  )

  JsBarcode(svgNode, barcodeString, {
    ...options,
    xmlDocument: barcodeDocument
  })

  return xmlSerializer.serializeToString(svgNode)
}

export const formats = {
  codabar: 'codabar',
  CODE39: 'CODE39',
  CODE128: 'CODE128',
  CODE128A: 'CODE128A',
  CODE128B: 'CODE128B',
  CODE128C: 'CODE128C',
  EAN2: 'EAN2',
  EAN5: 'EAN5',
  EAN8: 'EAN8',
  EAN13: 'EAN13',
  ITF14: 'ITF14',
  MSI: 'MSI',
  MSI10: 'MSI10',
  MSI11: 'MSI11',
  MSI1010: 'MSI1010',
  MSI1110: 'MSI1110',
  pharmacode: 'pharmacode',
  UPC: 'UPC'
} as const

export { default as JsBarcode } from 'jsbarcode'
