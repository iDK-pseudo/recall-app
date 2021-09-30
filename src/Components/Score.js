export const Score = (props) => {
    const {score, bestScore} = props;
    return (
        <div id="score-container">
            <p class="score-title"> Score</p>
            <p class="score-title"> Best Score</p>
            <p class="score-value"> {score} </p>
            <p class="score-value">  {bestScore} </p>
        </div>
    );
}