import React, { useState } from "react";

function useFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (bus) => {
    setFavoritos((favoritos) => [...favoritos, bus]);

    console.log(favoritos);
  };

  const eliminarFavorito = (bus) => {
    setFavoritos(favoritos.filter((f) => f.patente !== bus.patente));
    console.log(favoritos);
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
