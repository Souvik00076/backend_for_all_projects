export type TDecodeToken = {
  userName: string;
  userId: string;
  email: string;
};
declare global {
  namespace Express {
    interface Request {
      user: TDecodeToken;
    }
  }
}
