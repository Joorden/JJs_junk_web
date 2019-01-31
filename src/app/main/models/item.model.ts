export class Item {
  public name: string;
  public description: string;
  public imagePath: string;
  public price: number;

  constructor(name: string, description: string, imagepath: string, price: number) {
    this.name = name;
    this.description = description;
    this.imagePath = imagepath;
    this.price = price;
  }

}
