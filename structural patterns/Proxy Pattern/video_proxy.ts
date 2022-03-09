import IVideo from "./I_video";
import Video from "./video";

export default class VideoProxy implements IVideo {
  _fileName: string;
  _video: Video | undefined;

  constructor(fileName: string) {
    this._fileName = fileName;
  }

  open(): void {
    if (this._video == undefined) {
      this._video = new Video(this._fileName);
      console.log(`***************************************`);
      console.log(`Lazy Loading With Proxy`);
    }

    this._video.open();
  }
  getFileName(): string {
    return this._fileName;
  }
}
