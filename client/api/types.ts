export interface CustomJwtPayload {
  _id: string;
  name: string;
  username: string;
  email: string;
  iat: number;
  exp: number;
}
