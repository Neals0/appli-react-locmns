import React from "react";
import "./Header.scss";
import Bouton from "../Bouton/Bouton";

const onDeconnexion = (e) => {
  alert("Deconnexion");
};

export default function Header({children, maPropriete1}) {
  return (
    <header>
      <div className="conteneur-gauche">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
        />
        {maPropriete1}
        <ul className="menu">
          <li>
            <Bouton lien={"dashboard"} icone={"gauge"}>
              Dashboard
            </Bouton>
          </li>
          <li>
            <Bouton
              icone={"right-from-bracket"}
              evenement={onDeconnexion}
            >
              Déconnexion
            </Bouton>
          </li>
          <li>Produits</li>
          <li>Catégories</li>
        </ul>
      </div>
      <div className="conteneur-droite"></div>
    </header>
  );
}

