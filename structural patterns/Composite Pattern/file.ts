import IComponent from "./IComponent";

export default class File implements IComponent {
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  show(): void {
    console.log(`Show File ${this._name}`);
  }

  move(): void {
    console.log(`Move File ${this._name}`);
  }
}
