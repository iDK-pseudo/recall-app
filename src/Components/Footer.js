export const Footer = (props) => {
    return (
        <div id="footer">
            <button onClick={props.handleFirstTimeClick}> First Time </button>
            <button onClick={props.handleCantFoolMeClick}> Can't Fool Me </button>
        </div>
    );
}