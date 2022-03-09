import VideoLibrary from "./video_library";
import VideoProxy from "./video_proxy";

const videos = ["vid1.mp4", "vid2.mp4", "vid3.mp4"];

const video_library = new VideoLibrary();

videos.forEach((video) => video_library.add(new VideoProxy(video)));

video_library.open("vid1.mp4");
