import { useContext } from "react";
import { DashboardContext } from "../../App";

export default function DashboardHeaderButton() {
  const { onLogout } = useContext(DashboardContext);

  return <button onClick={onLogout}>Logout</button>;
}