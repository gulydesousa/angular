import { User } from "./user.interface";
import { Support } from "./support.interface";

export interface UserResponse {
  data:        User[];
  support:     Support;
}
