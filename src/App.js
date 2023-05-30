import "./App.css";
import Sidemenu from "./composants/common/Sidemenu/Sidemenu";
import Header from "./composants/common/Header/Header";
import { Routes, Route } from "react-router-dom";
import Connexion from "./composants/pages/Connexion/Connexion";
import Accueil from "./composants/pages/Accueil/Accueil";


function App() {
  const maVariable = 42;

  return (
    <>
      <Header maPropriete1={maVariable}>LOCMNS</Header>

      <Routes>
        <Route path="/" element={<Accueil/>}></Route>
        <Route path="/connexion" element={<Connexion/>}></Route>
      </Routes>

      <div className="main">
        <Sidemenu></Sidemenu>
        <div className="content"></div>
      </div>
    </>
  );
}

export default App;
