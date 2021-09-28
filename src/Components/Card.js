import pokemon from '../bulbasaur.jpg';

export const Card =(props) => {
    return (
        <div id="card-container">
            <div id="card">
                <img src={pokemon} height={300}></img>
                <p> Bulbasaur </p>
            </div>
        </div>
    );
}