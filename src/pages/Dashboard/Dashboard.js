import { UsersProvider } from "../../contexts/UsersContext";
import { useConsole } from "../../hooks/useConsole";
import { useUsers } from "../../hooks/useUsers";
import DashboardHeader from "../DashboardHeader";
import { UsersTable } from "../UsersTable/UsersTable";

function Dashboard() {
  const { users } = useUsers();
  useConsole("hola");

  return (
    <main className="flex h-screen">
      <UsersProvider
        value={{
          users,
        }}
      >
        <nav className="w-1/5 h-screen bg-[#383F51]">
          <figure>logo</figure>
          <ul>
            <li>home</li>
          </ul>
        </nav>
        <main className="w-4/5 h-screen">
          <DashboardHeader />
          <section className="flex-1 bg-[#2C73EB] flex flex-col items-center justify-center">
            <UsersTable />
          </section>
        </main>
      </UsersProvider>
    </main>
  );
}

export default Dashboard;
