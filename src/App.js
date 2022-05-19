import { Landing, Login, NoMatch, Dashboard } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { DashboardProvider } from "./contexts/DashboardContext";
import { User } from "./pages/User/User";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <DashboardProvider
          value={{
            onLogout,
            onSuccess,
            isLogged,
          }}
        >
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  isLogged ? (
                    <Dashboard>
                      <Dashboard.Header />
                      <Dashboard.Content />
                    </Dashboard>
                  ) : (
                    <Landing />
                  )
                }
              />
              <Route path="user/:userId" element={<User />} />
              {isLogged ? null : <Route path="login" element={<Login />} />}
            </Route>
            {/* 404 not found / no match */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </DashboardProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
