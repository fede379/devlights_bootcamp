import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { LoginHero } from "./LoginHero";
import { LoginFormSuccess } from "./LoginFormSuccess";

import "./Login.css";

export default function Login() {
  const [isLogged, setIsLogged] = useState(window.localStorage.getItem("isLogged"))

  function onSuccess() {
    setIsLogged("true");
  }

  return (
    <main className="Login">
      <section className="LoginHeroContainer">
        <LoginHero />
      </section>
      <section className="LoginFormContainer">
        {isLogged === "true" ? (
          <LoginFormSuccess />
        ) : (
          <LoginForm onSuccess={onSuccess} />
        )}
      </section>
    </main>
  );
}