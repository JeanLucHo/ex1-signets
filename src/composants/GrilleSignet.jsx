import signets from "../data/signets.json";
import ContenuSignet from "./contenuSignet";

export default function GrilleSignet(props) {
    return (
        <div className ="GrilleSignet">

        {signets.map((signet) => (
            <ContenuSignet
             key={signet.id}
             id={signet.id}
             titre={signet.titre}
             couleur={signet.couleur}
             dateModifie={signet.dateModifie}/>
             ))}
        </div>
    );
  }