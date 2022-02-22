import IUploader from "./i_uploader";

export default class Compressor implements IUploader {
  _uploader: IUploader;

  constructor(uploader: IUploader) {
    this._uploader = uploader;
  }

  upload(image: string): void {
    console.log("********************");
    console.log("Compressing Image");
    this._uploader.upload(image);
  }
}
