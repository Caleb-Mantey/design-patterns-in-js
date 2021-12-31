import ICompressor from './i_compressor';

export default class RarCompressor implements ICompressor {


    compress(file: string): void {
        console.log(`*************************************`)
        console.log(`Compressing ${file} using Rar format`)
    }
}


