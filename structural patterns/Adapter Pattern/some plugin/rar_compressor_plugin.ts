export default class RarCompressorPlugin {
  execute(file: string): void {
    console.log(`*************************************`);
    console.log(`Compressing using Rar Plugin`);
    console.log(`Compressing ${file} using Rar format`);
  }
}
