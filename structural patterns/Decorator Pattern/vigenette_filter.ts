import IUploader from "./i_uploader";

export default class VigenetteFilter implements IUploader {
  _uploader: IUploader;

  constructor(uploader: IUploader) {
    this._uploader = uploader;
  }

  upload(image: string): void {
    console.log("********************");
    console.log("Applying Vigenette Filter to Image");
    this._uploader.upload(image);
  }
}
