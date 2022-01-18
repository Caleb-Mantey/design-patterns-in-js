import FileCompressor from './file_compressor';
import RarCompressor from './rar_compressor';
import ZipCompressor from './zip_compressor';
import TarCompressor from './tar_compressor';



const compressor: FileCompressor = new FileCompressor();


compressor.compress(new RarCompressor(), "myfile.txt")
compressor.compress(new ZipCompressor(), "conf.cf")
compressor.compress(new TarCompressor(), "join.json")


