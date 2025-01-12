// Karakter bileşeniniz buraya gelecek
import React, { useState } from "react";

const Karakter = ({ char }) => {
  console.log("char", char);
  const [showInfo, setShowInfo] = useState(false);
  if (!char) {
    return <div>Loading...</div>;
  }

  return (
    <div className="karakterler">
      <button
        className="charbuton"
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        {char.name}
        <span>{char.birth_year}</span>
      </button>
      {showInfo && (
        <div className="charInfo">
          <div className="karakterlist">Gender: {char.gender}</div>
          <div className="karakterlist">Height: {char.height}</div>
          <div className="karakterlist">Mass: {char.mass}</div>
          <div className="karakterlist">Birth Year: {char.birth_year}</div>
          <div className="karakterlist">Eye Color: {char.eye_color}</div>
          <div className="appears">Appears in {char.films.length} films</div>
          <div className="karakterlist">
            {char.films.map((episodes) => (
              <div>Episode:{episodes}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Karakter;
