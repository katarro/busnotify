import React, { useState } from "react";
import { saveData } from "../hooks/localStorage/saveData";
function useFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (bus) => {
    setFavoritos((favoritos) => [...favoritos, bus]);
    console.log(favoritos);
    // Guarda favoritos en localStorage
    saveData(favoritos);
  };

  const eliminarFavorito = (bus) => {
    setFavoritos(favoritos.filter((f) => f.patente !== bus.patente));
    console.log(favoritos);
    // llamar a localStorage
  };
  React.useEffect(() => {
    console.log(favoritos);
  }, [favoritos]);

  return {
    agregarFavorito,
    eliminarFavorito,
    favoritos,
  };
}
export default useFavoritos;
