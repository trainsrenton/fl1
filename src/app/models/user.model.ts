export class UserModel {
  constructor(
    public uid: string,
    public email: string,
    public hasTeam?: boolean,
    public profileCompleted?: boolean,
    public pseudo?: string,
    public city?: string,
    public favTeam?: String,
  ) {}
}
