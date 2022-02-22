import ICompressor from './i_compressor';



export default class FileCompressor {

    compress(compressor: ICompressor, file: string) {
        compressor.compress(file)
    }
}