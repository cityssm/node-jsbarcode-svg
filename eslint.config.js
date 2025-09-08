import baseConfig, { cspellWords, defineConfig } from 'eslint-config-cityssm';
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
});
export default config;
