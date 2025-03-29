export interface IUser {
  email: string;
  password: string;
  role: "user" | "staff" | "admin";
}

export interface signin {
  email: string;
  password: string;
}

export interface resetpassword {
  userid: string;
  newpassword: string;
}
