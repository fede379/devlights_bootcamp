import { Avatar } from "../../components/Avatar";
import { useUsersContext } from "../../hooks/useUsersContext";
import DashboardHeaderButton from "../DashboardHeaderButton";

export default function DashboardHeader() {
  const { users } = useUsersContext();

  console.log("users", users);

  return (
    <header className="h-[70px] flex justify-between items-center">
      <h1>Users List</h1>
      <input className="bg-[#F8F9FA] rounded-md" />
      <Avatar />
    </header>
  )
}