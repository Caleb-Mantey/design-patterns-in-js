import FileCompressor from "./file_compressor";
import ZipCompressor from "./zip_compressor";
import RarCompressorAdapter from "./rar_compressor_adapter";

const compressor = new FileCompressor();

compressor.compress(new ZipCompressor(), "hello.txt");
compressor.compress(new RarCompressorAdapter(), "trial.txt");
