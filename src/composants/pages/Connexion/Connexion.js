import React from 'react'
import Bouton from '../../common/Bouton/Bouton'

export default function Connexion() {

  const onConnexion = (e) => alert("Connecté");

  return (
    <form>
      <input></input>

      <Bouton lien="accueil">Annuler</Bouton>
      <Bouton evenement={onConnexion}>Se Connceter</Bouton>
    </form>
  );
}
