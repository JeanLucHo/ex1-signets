import './Appli.scss';
import BtnAjout from './composants/BtnAjout';
import Entete from './composants/Entete';
import GrilleSignet from './composants/GrilleSignet';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete/>
        <GrilleSignet/>
        <BtnAjout/>
    </div>

  );
}
