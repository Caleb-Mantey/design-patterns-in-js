import ICompressor from './i_compressor';

export default class TarCompressor implements ICompressor {


    compress(file: string): void {
        console.log(`*************************************`)
        console.log(`Compressing ${file} using Tar format`)
    }
}


