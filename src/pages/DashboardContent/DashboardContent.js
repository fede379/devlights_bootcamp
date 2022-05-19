import { UsersTable } from "../UsersTable/UsersTable";

export function DashboardContent() {
  return (
    <section className="flex-1 bg-[#2C73EB] flex flex-col items-center justify-center">
      <UsersTable />
    </section>
  );
}
