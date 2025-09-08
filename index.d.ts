import JsBarcode from 'jsbarcode';
/**
 * Generate a barcode SVG image.
 * @param barcodeString The string to encode in the barcode
 * @param options {@link https://github.com/lindell/JsBarcode/wiki/Options JsBarcode Options}
 * @returns The generated SVG as a string
 */
export default function generateSvg(barcodeString: string, options: Omit<JsBarcode.Options, 'xmlDocument'>): string;
export declare const formats: {
    readonly codabar: "codabar";
    readonly CODE39: "CODE39";
    readonly CODE128: "CODE128";
    readonly CODE128A: "CODE128A";
    readonly CODE128B: "CODE128B";
    readonly CODE128C: "CODE128C";
    readonly EAN2: "EAN2";
    readonly EAN5: "EAN5";
    readonly EAN8: "EAN8";
    readonly EAN13: "EAN13";
    readonly ITF14: "ITF14";
    readonly MSI: "MSI";
    readonly MSI10: "MSI10";
    readonly MSI11: "MSI11";
    readonly MSI1010: "MSI1010";
    readonly MSI1110: "MSI1110";
    readonly pharmacode: "pharmacode";
    readonly UPC: "UPC";
};
export { default as JsBarcode } from 'jsbarcode';
