import pokemonInfo from '../data/pokemon-info.json';
import pokemonImages from '../data/pokemon-images.json';
import { useState, useEffect } from 'react';

export const Card =(props) => {
    const [pokemonIndex,setPokemonIndex] = useState(Math.floor(Math.random()*30));
    const [imageSrc, setImageSrc] = useState("");

    useEffect(()=>{
        const image = new Image();
        image.src = pokemonImages[pokemonInfo[pokemonIndex].name];
        image.onload = ()=>{
            setImageSrc(image.src);
        }
    });
    return (
        <div id="card-container">
            <div id="card">
                {imageSrc === "" ? <div></div> : <img alt= "Pokemon Image" src={pokemonImages[pokemonInfo[pokemonIndex].name]}></img>}
                <p> {pokemonInfo[pokemonIndex].name} </p>
            </div>
        </div>
    );
}