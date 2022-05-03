
import { LoginForm } from "./LoginForm";
import { LoginHero } from "./LoginHero";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { useContext } from "react";
import { DashboardContext } from "../../App";

export default function Login() {
  const navigate = useNavigate();
  const { onSuccess } = useContext(DashboardContext);

  function onLoginFormSuccess() {
    onSuccess();
    navigate("/");
  }

  return (
    <main className="Login">
      <section className="LoginHeroContainer">
        <LoginHero />
      </section>
      <section className="LoginFormContainer">
        <LoginForm onSuccess={onLoginFormSuccess} />
      </section>
    </main>
  );
}