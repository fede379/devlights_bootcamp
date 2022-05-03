import { createContext, useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../App";
import { getUsers } from "../../services/users";
import DashboardHeader from "../DashboardHeader";
import { UsersTable } from "../UsersTable/UsersTable";
import "./Dashboard.css";

export const UsersContext = createContext();

function Dashboard() {
  const [users, setUsers] = useState([]);
  const { isLogged } = useContext(DashboardContext);

  async function getData() {
    try {
      const { results } = await getUsers();
      setUsers(results);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="Dashboard">
      <section className="DashboardContainer">
        <UsersContext.Provider value={{
          users
        }}>
          <DashboardHeader />
          {String(isLogged)}
          <UsersTable />
        </UsersContext.Provider>
      </section>
    </main>
  );
}

export default Dashboard;
