export class Item {
  public  itemCode: number;
  public name: string;
  public description: string;
  public image: string;
  public price: number;

  constructor(itemCode: number, name: string, description: string, imagepath: string, price: number) {
    this.itemCode = itemCode;
    this.name = name;
    this.description = description;
    this.image = imagepath;
    this.price = price;
  }

}
