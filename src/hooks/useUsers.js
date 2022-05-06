import { useCallback, useEffect, useState } from "react";
import { getUsers } from "../services/users";

export function useUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const { results } = await getUsers();
      setUsers(results);
    } catch (error) {
      console.log(error.message);
    }
  }, [setUsers]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, setUsers, fetchUsers };
}