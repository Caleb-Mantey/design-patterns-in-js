import ICompressor from "./i_compressor";
import RarCompressorPlugin from "./some plugin/rar_compressor_plugin";

export default class RarCompressorAdapter implements ICompressor {
  compressorPlugin: RarCompressorPlugin;

  constructor() {
    this.compressorPlugin = new RarCompressorPlugin();
  }

  compress(file: string): void {
    console.log(`*************************************`);
    console.log(`Calling from Rar Compressor Adapter`);
    this.compressorPlugin.execute(file);
  }
}
