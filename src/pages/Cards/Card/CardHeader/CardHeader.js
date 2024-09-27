import React from "react";

const CardHeader = ({ league, sport }) => (
  <div className="card__content-header" style={styles.header}>
    {sport} - {league}
  </div>
);

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px", // Puedes ajustar estos valores de padding a tu gusto
    fontSize: "18px", // Ajusta el tamaño de la fuente si lo necesitas
    fontWeight: "bold", // Cambia el peso de la fuente si lo prefieres más ligero
    textAlign: "center",
  },
};

export default CardHeader;
