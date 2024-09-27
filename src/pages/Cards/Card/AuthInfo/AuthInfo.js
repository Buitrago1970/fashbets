import React from "react";

function AuthInfo({ betInfo }) {
  return (
    <div className="auth-info">
      <div className="auth-info__bet-type">Apuesta: {betInfo.betType}</div>
      <div className="auth-info__bet-for">A favor de: {betInfo.betFor}</div>
      <div className="auth-info__odds">
        <div className="auth-info__price">Precio: {betInfo.price} pesos</div>
        <span>Cuota:</span>
        <span className="auth-info__odds-value">{betInfo.odds}X</span>
      </div>
    </div>
  );
}

export default AuthInfo;
