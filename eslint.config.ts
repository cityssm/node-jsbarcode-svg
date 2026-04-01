import baseConfig, { defineConfig } from 'eslint-config-cityssm'
import { cspellWords } from 'eslint-config-cityssm/exports.js'

export const config = defineConfig(baseConfig, {
  files: ['**/*.ts'],
  rules: {
    '@cspell/spellchecker': [
      'warn',
      {
        cspell: {
          words: [...cspellWords, 'codabar', 'jsbarcode', 'pharmacode']
        }
      }
    ]
  }
})

export default config
