import { User } from "./user.interface";

export interface State {
  users: User[];
  loading: boolean;
}
