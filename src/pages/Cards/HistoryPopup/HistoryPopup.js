import React from "react";
import "./HistoryPopup.css";

function HistoryPopup({ betHistory, closeHistoryPopup }) {
  return (
    <div className="history-popup">
      <div className="history-popup-content">
        <button className="close-button" onClick={closeHistoryPopup}>
          &times;
        </button>
        <div className="history-popup-header">
          <h2>Historial de Apuestas Aprobadas</h2>
        </div>
        <div className="history-popup-body">
          {betHistory.length === 0 ? (
            <p className="no-bets">No hay apuestas aceptadas.</p>
          ) : (
            <ul className="bet-list">
              {betHistory.map((bet, index) => (
                <li key={index} className={`bet-item ${bet.status === "Aprobada" ? "green" : "red"}`}>
                  <div className="bet-info">
                    <h3 className="bet-name">{bet.name}</h3>
                    <p className="bet-details">
                      Deporte: <span>{bet.sport}</span>
                    </p>
                    <div className="card__content-teams-info-teams">
                      {bet.teams.map((team, idx) => (
                       <div className="card__content-teams-info-teams">
                       <div>
                         <div className="card__content-teams-info-teams-team">
                           <img src={team.image} alt={team.name} />
                           <div>{team.name}</div>
                         </div>
               
                       </div>
                     </div>
                      ))}
                    </div>
                    <p className="bet-details">
                      Cuota: <span>{bet.odds}</span>
                    </p>
                    <p className="bet-details">
                      Precio: <span>${bet.price}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryPopup;
