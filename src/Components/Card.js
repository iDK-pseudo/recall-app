import pokemonInfo from '../data/pokemon-info.json';
import pokemonImages from '../data/pokemon-images.json';

export const Card =(props) => {
    const {pokemonIndex} = props;
    return (
        <div id="card-container">
            <div id="card">
                <img alt= "Pokemon Image" src={pokemonImages[pokemonInfo[pokemonIndex].name]}></img>
                <p> {pokemonInfo[pokemonIndex].name} </p>
            </div>
        </div>
    );
}