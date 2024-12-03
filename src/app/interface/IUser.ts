export interface IUser {
    id: number;
    name: string;
    email: string
}

export interface UserApi {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
}
