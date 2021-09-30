import ResetLogo from '../icons/redo-solid.svg'

export const GameOver = (props) => {
    return (
        <div id="game-over">
            <p id="game-over-p"> Game Over </p>
            <div id="reset-button" onClick={props.handleResetClick}>
                <img src={ResetLogo} alt="Reset"/>
            </div>
        </div>
    );
}