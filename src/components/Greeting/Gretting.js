import { useEffect, useState } from "react";

export default function Greeting({ name, ...props }) {
  const [state, setState] = useState({ test: "I'm Greeting Function" });
  const [counter, setCounter] = useState(0);
  function onClick() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log(`name: ${name}`);
    console.log(`counter: ${counter}`);
    // a modo de prueba (es opcional)
    return () => {
      //desuscribo de cualquier evento
    };
  }, [name, counter]);

//   useEffect(() => {
//     console.log(`counter: ${counter}`);
//   }, [counter]);

  useEffect(() => {
    console.log("Greeting did mount");
  }, []);

  return (
    <>
      <h1>Hi! {name ? `My name is ${name}` : ""}</h1>
      <h3>State:</h3>
      <code>{JSON.stringify(state, null, 2)}</code>
      <h3>Props:</h3>
      <code>{JSON.stringify({ name, ...props }, null, 2)}</code>
      <br />
      <p>counter: {counter}</p>
      <button onClick={onClick}>+1 counter</button>
    </>
  );
}
