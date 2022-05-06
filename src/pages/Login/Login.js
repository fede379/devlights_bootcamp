
import { LoginForm } from "./LoginForm";
import { LoginHero } from "./LoginHero";
import { useNavigate } from "react-router-dom";
import { useDashboard } from "../../hooks/useDashboard";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { onSuccess } = useDashboard();

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