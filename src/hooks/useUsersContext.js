import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";

export function useUsersContext() {
  const usersContext = useContext(UsersContext);

  if (usersContext === undefined) {
    throw new Error("useUsersContext esta fuera del proveedor UsersContextProvider");
  }

  return usersContext;
}

