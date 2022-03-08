import ImageFactory from "./image_factory";

export default class ImageService {
  image_factory: ImageFactory;

  constructor() {
    this.image_factory = new ImageFactory();
  }

  openImage(path: string): void {
    const image = this.image_factory.loadImage(path);
    console.log("*********************************");
    console.log(`Loaded Image From ${image.path}`);
    console.log("*********************************");
  }
}
