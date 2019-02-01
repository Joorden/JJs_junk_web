export class Item {
  public name: string;
  public description: string;
  public image: string;
  public price: number;

  constructor(name: string, description: string, imagepath: string, price: number) {
    this.name = name;
    this.description = description;
    this.image = imagepath;
    this.price = price;
  }

}
