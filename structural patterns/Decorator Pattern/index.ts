import IUploader from "./i_uploader";
import VigenetteFilter from "./vigenette_filter";
import Compressor from "./compressor";
import ImageUploader from "./image_uploader";

const uploader: IUploader = new VigenetteFilter(
  new Compressor(new ImageUploader())
);
uploader.upload("myImage.png");
