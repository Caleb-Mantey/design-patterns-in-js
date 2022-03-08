import { Image } from "./types/image_types";
import ImageLoader from "./image_loader";

export default class ImageFactory {
  images: Image[] = [];

  constructor() {}

  // Flywieght pattern makes it easy to reuse already instantiated icons so we don't instantiate again and waste memory
  loadImage(path: string): Image {
    let image = this.images.find((image) => image.path == path);

    if (image) console.log(`Image Cache Found For ${image.path}`);

    if (!image) {
      image = new ImageLoader(new Date().toString(), path);
      this.images.push(image);
    }

    return image;
  }
}
