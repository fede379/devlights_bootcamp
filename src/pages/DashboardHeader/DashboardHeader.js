import { Avatar } from "../../components/Avatar";
import { useUsers } from "../../hooks/useUsers";

export default function DashboardHeader() {
  const { data } = useUsers({});

  console.log("users", data);

  return (
    <header className="h-[70px] flex justify-between items-center">
      <h1>Users List</h1>
      <Avatar.Large />
      <Avatar.Small />
      <input className="bg-[#F8F9FA] rounded-md" />
      <Avatar />
    </header>
  )
}