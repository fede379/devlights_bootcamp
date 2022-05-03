import { useContext } from "react";
import { DashboardContext } from "../../App";
import { UsersContext } from "../Dashboard";

export function UsersTable() {
  const { users } = useContext(UsersContext);
  const { isLogged } = useContext(DashboardContext);

  return (
    <table>
      {String(isLogged)}
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, email, phone }, i) => (
          <tr key={i}>
            <th>{`${name.last} ${name.first}`}</th>
            <th>{phone}</th>
            <th>{email}</th>
          </tr>
        ))}
      </tbody>
    </table>
)
}