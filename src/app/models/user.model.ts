export class UserModel {
  constructor(
    public uid: string,
    public email: string,
    public photoURL?: string,
    public displayName?: string,
    public favoriteColor?: string
  ) {}
}
