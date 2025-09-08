import assert from 'node:assert'
import { describe, it } from 'node:test'

import generateBarcodeSvg, { formats } from '../index.js'

await describe('node-jsbarcode-svg', async () => {
  const specialTestStrings: Partial<Record<keyof typeof formats, string>> = {
    EAN2: '12',
    EAN5: '12345',
    EAN8: '96385074',
    EAN13: '5901234123457',

    MSI: '1234',
    MSI10: '1234',
    MSI11: '1234',
    MSI1010: '1234',
    MSI1110: '1234',

    codabar: '1234567890',
    CODE128C: '12345678',
    ITF14: '12345678901231',
    pharmacode: '123456',
    UPC: '123456789999',
  }

  for (const format of Object.values(formats)) {
    await it(`should support format '${format}'`, () => {
      const svg = generateBarcodeSvg(
        specialTestStrings[format] ?? 'PW.25.12345',
        {
          format,
          height: 100,
          width: 2
        }
      )

      assert.ok(svg.startsWith('<svg'))
      assert.ok(svg.endsWith('</svg>'))

      assert.ok(svg.includes('rect'))
      assert.ok(svg.includes('text'))
    })
  }
})
