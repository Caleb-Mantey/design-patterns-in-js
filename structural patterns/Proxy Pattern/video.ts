import IVideo from "./I_video";

export default class Video implements IVideo {
  _fileName: string;

  constructor(fileName: string) {
    this._fileName = fileName;
  }

  open(): void {
    console.log(`----------------------------------------`);
    console.log(`Video file Opened --- ${this._fileName}`);
  }
  getFileName(): string {
    return this._fileName;
  }
}
