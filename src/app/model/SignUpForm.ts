export class SignUpForm {
  name: string;
  username: string;
  email: string;
  password: string;
  roles: string[];

  constructor(name: string, username: string, email: string, password: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = ['admin', 'pm'];
  }
}
