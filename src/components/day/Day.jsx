import "./index.css";
import { useState } from "react";

const Day = ({ gift }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="gift" onClick={onHandleClick}>
      {/* Classe condizionale che cambia in base allo stato di "isOpen" */}
      <div className={`gift__container ${isOpen ? "is__open" : ""}`}>
        {/* Se "isOpen" è true, mostra l'immagine del contenuto del regalo, altrimenti 
        mostra il giorno e l'immagine del regalo*/}
        {isOpen ? (
          <img src={gift.content} alt="content" className="gift__content" />
        ) : (
          <div>
            <h2>{gift.day}</h2>
            <img src={gift.image} alt="gift" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Day;
