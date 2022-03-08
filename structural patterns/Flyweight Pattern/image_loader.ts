export default class ImageLoader {
  name: string;
  path: string;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }

  getName(): string {
    return this.name;
  }

  getPath(): string {
    return this.path;
  }
}
