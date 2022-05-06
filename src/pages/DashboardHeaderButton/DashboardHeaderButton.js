import { useDashboard } from "../../hooks/useDashboard";

export default function DashboardHeaderButton() {
  const { onLogout } = useDashboard();

  return <button onClick={onLogout}>Logout</button>;
}