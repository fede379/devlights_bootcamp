import "./App.css";
import { Landing, Login, NoMatch, Dashboard } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const DashboardContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("isLogged") === "true"
  );

  function onSuccess() {
    setIsLogged(true);
  }

  function onLogout() {
    setIsLogged(false);
    window.localStorage.removeItem("isLogged");
  }

  return (
    <BrowserRouter>
      <DashboardContext.Provider
        value={{
          onLogout,
          onSuccess,
          isLogged
        }}
      >
        <Routes>
          <Route
            path="/"
            element={isLogged ? <Dashboard /> : <Landing />}
          />
          {isLogged ? null : (
            <Route path="/login" element={<Login />} />
          )}
          {/* 404 not found / no match */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </DashboardContext.Provider>
    </BrowserRouter>
  );
}

export default App;
