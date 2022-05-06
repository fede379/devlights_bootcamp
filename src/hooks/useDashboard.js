import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";

export function useDashboard() {
  const dashboardContext = useContext(DashboardContext);

  if (dashboardContext === undefined) {
    throw Error("useDashboard esta fuera del proveedor DashboardContextProvider")
  }

  return dashboardContext;
}