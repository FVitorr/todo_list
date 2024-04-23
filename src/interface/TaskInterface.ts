
import User from "./UserInterface"

export interface Task {
  id:number;
  user:User;
  description:string;
  data:number;
  status:string;
}