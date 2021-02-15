export default function ContenuSignet({ id, titre, couleur, dateModifie }) {
    return (
        <div className = "ContenuSignet" style={{ backgroundColor: couleur }}>
            <button>
                ---
                <br/>
                --
                <br/>
                -
            </button>
            <img src={`images-chats/${id}.jpeg`} alt="chat"/>
            <h3>{titre}</h3>
            <h4>{dateModifie}</h4>

            <button>...</button>

        </div>
    );
  }