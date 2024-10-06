import React from "react";
import "./HistoryPopup.css";

function HistoryPopup({ betHistory, closeHistoryPopup }) {
  return (
    <div className="history-popup">
      <div className="history-popup-content">
        <h2>Historial de Apuestas Aprobadas</h2>
        {betHistory.filter((bet) => bet.status === "Aprobada").length === 0 ? (
          <p>No hay apuestas aceptadas.</p>
        ) : (
          <ul>
            {betHistory
              .filter((bet) => bet.status === "Aprobada")
              .map((bet, index) => (
                <li key={index}>
                  {bet.match} - {bet.betType} - {bet.betFor} - Cuota: {bet.odds}
                </li>
              ))}
          </ul>
        )}
        <button onClick={closeHistoryPopup}>Cerrar</button>
      </div>
    </div>
  );
}

export default HistoryPopup;
