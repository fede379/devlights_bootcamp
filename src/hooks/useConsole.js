import { useEffect } from "react";

export function useConsole(mensaje) {
  useEffect(() => {
    console.log(`Mi custom hook dice: ${mensaje}`);
  }, [mensaje]);
}