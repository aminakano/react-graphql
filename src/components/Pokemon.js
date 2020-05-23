import React from 'react';

export function Pokemon({ pokemon }) {
  const attackArr = pokemon.attacks.special.slice(0, 3);
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <h3>{pokemon.name}</h3>
      </div>
      <div className="pokemon__meta">
        <p>{pokemon.maxHP}</p>
        <p>{pokemon.maxCP}</p>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        {attackArr.map((attack) => (
          <p key={`${attack.name}-${attack.damage}`}>{attack.name}</p>
        ))}
      </div>
    </div>
  );
}