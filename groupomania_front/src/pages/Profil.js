import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profile = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? ( //Si j'ai déjà l'uid attribué, j'affiche la page profil de l'usilisateur
        <UpdateProfil /> //
      ) : (
        //Sinon, je propose la connexion
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="fond de la page de connexion" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
