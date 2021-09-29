export const Score = (props) => {
    const {score, bestScore} = props;
    return (
        <div id="score-container">
            <p> Score</p>
            <p> Best Score</p>
            <p> {score} </p>
            <p> {bestScore} </p>
        </div>
    );
}