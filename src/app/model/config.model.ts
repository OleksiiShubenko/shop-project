export class ConfigModel {
  constructor(
    public id: number = 0,
    public app: string = "",
    public login: string = "",
    public email: string = "",
    public version: string = ""
  ) {}
}
