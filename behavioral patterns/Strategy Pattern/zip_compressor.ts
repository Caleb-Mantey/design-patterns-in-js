import ICompressor from './i_compressor';

export default class ZipCompressor implements ICompressor {


    compress(file: string): void {
        console.log(`*************************************`)
        console.log(`Compressing ${file} using Zip format`)
    }
}


