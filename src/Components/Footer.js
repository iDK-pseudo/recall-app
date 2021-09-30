export const Footer = (props) => {
    return (
        <div id="footer">
            <button onClick={props.handleCantFoolMeClick}> Seen </button>
            <button onClick={props.handleFirstTimeClick}> First Time </button>
        </div>
    );
}