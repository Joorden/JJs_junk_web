export class User {
  email: string;
  fullName: string;
  password: string;
  postcode: string;
  homeNumber: string;
  admin: boolean;

  constructor(Fullname: string, email: string, postcode: string, homeNumber: string, password: string, admin: boolean) {
    this.fullName = Fullname;
    this.email = email;
    this.postcode = postcode;
    this.homeNumber = homeNumber;
    this.password = password;
    this.admin = admin;
  }
}


