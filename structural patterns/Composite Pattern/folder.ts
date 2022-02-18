import File from "./file";
import IComponent from "./IComponent";

export default class Folder implements IComponent {
  _name: string;
  _items: IComponent[] = [];

  constructor(name: string) {
    this._name = name;
  }

  add(file: IComponent): void {
    this._items.push(file);
  }

  remove(file: IComponent): void {
    this._items = this._items.filter((item) => item !== file);
  }

  show(): void {
    console.log(`Showing content for ${this._name}`);
    this._items.forEach((item) => item.show());
  }

  move(): void {
    console.log(`Moving ${this._name} with the following content`);
    this._items.forEach((item) => item.move());
  }
}
