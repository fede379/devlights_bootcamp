import landingImg from "./logo.png";
import { useNavigate } from "react-router-dom";

import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();

  function onClick() {
    navigate("login");
  }

  return (
    <main className="Landing">
      <section className="LandingContainer">
        <img src={landingImg} alt="Landing Hero" />
        <h1>Devlights Bootcamp</h1>
        <h3>ReactJS</h3>

        <button onClick={onClick}>Login</button>
      </section>
    </main>
  );
}
