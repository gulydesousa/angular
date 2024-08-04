import { User } from "./user.interface";
import { Support } from "./support.interface";

export interface UsersResponse {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        User[];
  support:     Support;
}




