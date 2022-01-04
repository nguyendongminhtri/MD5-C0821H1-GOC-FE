export class JwtResponse {
  name: string;
  token: string;
  avatar: string;
  roles: string[];

  constructor(name: string, token: string, avatar: string, roles: string[]) {
    this.name = name;
    this.token = token;
    this.avatar = avatar;
    this.roles = roles;
  }
}
