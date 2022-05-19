import { DashboardContent } from "../DashboardContent/DashboardContent";
import DashboardHeader from "../DashboardHeader";

function Dashboard({ children }) {
  return (
    <main className="flex h-screen">
        <nav className="w-1/5 h-screen bg-[#383F51]">
          <figure>logo</figure>
          <ul>
            <li>home</li>
          </ul>
        </nav>
        <main className="w-4/5 h-screen">
          {children}
        </main>
    </main>
  );
}

Dashboard.Header = DashboardHeader;
Dashboard.Content = DashboardContent;

export default Dashboard;
