import pokemonInfo from '../data/pokemon-info.json';
import pokemonImages from '../data/pokemon-images.json';
import { useState, useEffect } from 'react';

export const Card =(props) => {
    const {pokemonIndex} = props;
    return (
        <div id="card-container">
            <div id="card">
                {pokemonIndex === 0 ? <div></div> : <img alt= "Pokemon Image" src={pokemonImages[pokemonInfo[pokemonIndex].name]}></img>}
                <p> {pokemonInfo[pokemonIndex].name} </p>
            </div>
        </div>
    );
}