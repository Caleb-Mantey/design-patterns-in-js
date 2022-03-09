import IVideo from "./I_video";

export default class VideoLibrary {
  videos: IVideo[] = [];

  open(fileName: string): void {
    const video = this.videos.find((video) => video.getFileName() == fileName);

    video?.open();
  }

  add(video: IVideo): void {
    this.videos.push(video);
  }
}
