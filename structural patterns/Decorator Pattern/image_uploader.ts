import IUploader from "./i_uploader";

export default class ImageUploader implements IUploader {
  upload(image: string): void {
    console.log("********************");
    console.log(`Uploading Image -- file=${image}`);
  }
}
