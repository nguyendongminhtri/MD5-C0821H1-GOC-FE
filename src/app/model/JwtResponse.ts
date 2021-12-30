export class JwtResponse {
  name: string;
  token: string;
  roles: string[];

  constructor(name: string, token: string, roles: string[]) {
    this.name = name;
    this.token = token;
    this.roles = roles;
  }
}
