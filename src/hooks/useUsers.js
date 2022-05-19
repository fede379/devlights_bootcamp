import { useQuery } from "react-query";
import { getUsers } from "../services/users";

export function useUsers() {
  return useQuery("users", getUsers);
}