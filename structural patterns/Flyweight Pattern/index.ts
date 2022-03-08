import ImageService from "./image_service";

const image_service: ImageService = new ImageService();

image_service.openImage("/my_image.png");
image_service.openImage("img/profile.jpeg");

// This image will not be created again but
// it will be loaded from the cache as it has already been instantiated in line 5
image_service.openImage("/my_image.png");
