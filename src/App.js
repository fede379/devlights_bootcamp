import { Landing, Login, NoMatch, Dashboard } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { DashboardProvider } from "./contexts/DashboardContext";
import { User } from "./pages/User/User";

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
          >
            <Route index element={isLogged ? <Dashboard /> : <Landing />} />
            <Route path="user/:userId" element={<User />} />
            {isLogged ? null : (
              <Route path="login" element={<Login />} />
            )}
          </Route>
          {/* 404 not found / no match */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </DashboardProvider>
    </BrowserRouter>
  );
}

export default App;
