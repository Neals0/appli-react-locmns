import React from "react";
import "./Bouton.scss";

export default function Bouton({
  children,
  lien,
  icone,
  evenement
}) {

  const templateIcone = <i className={`fa-solid fa-${icone}`}></i>;

  if (lien) {
    return (
      <a href={lien}>
        {templateIcone}
        {children}
      </a>
    );
  } else {
    return (
      <button onClick={evenement}>
        {templateIcone}
        {children}
      </button>
    );
  }
}
