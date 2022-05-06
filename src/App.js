import { Landing, Login, NoMatch, Dashboard } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { DashboardProvider } from "./contexts/DashboardContext";

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
      <DashboardProvider
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
      </DashboardProvider>
    </BrowserRouter>
  );
}

export default App;
