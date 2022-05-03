import { useContext } from "react";
import { UsersContext } from "../Dashboard/Dashboard";
import DashboardHeaderButton from "../DashboardHeaderButton";

export default function DashboardHeader() {
  const { users } = useContext(UsersContext);

  console.log("users", users);

  return (
    <>
      <DashboardHeaderButton />
      <h1>Dashboard</h1>
    </>
  )
}