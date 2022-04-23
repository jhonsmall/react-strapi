import React, { useState, useEffect, useContext } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1337/api/facturas')
      .then((response) => response.data.data)
      .then((data) => setCharacters(data));
  }, []);
  const removeCard = (index) => {
    const newCharacter = characters.filter((_, i) => {
      return i !== index;
    });
    setCharacters(newCharacter);
  };
  const refresh = () => {
    fetch('http://localhost:1337/api/facturas')
      .then((response) => response)
      .then((data) => setCharacters(data.data.data));
  };
  return characters.splice(0, 2).data.map((character, i) => {
    return (
      <div className="col-md-3" key={i}>
        {/* <h1 style={{ color }}>Hola</h1> */}
        <div className="card mt-4 primary" style={{ width: 18 + 'rem' }}>
          <div className="card-body">
            <h5 className="card-title">{character.Nombre}</h5>
            <p className="card-text">{character.Direccion}</p>
            <span onClick={() => removeCard(i)} className="btn btn-primary m-3">
              {character.id}
            </span>
            <span onClick={() => refresh()} className="btn btn-primary m-3">
              Recargar
            </span>
          </div>
        </div>
      </div>
    );
  });
};

export default Characters;
