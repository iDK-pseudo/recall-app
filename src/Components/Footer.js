export const Footer = (props) => {
    return (
        <div id="footer">
            <button onClick={props.handleFirstTimeClick}> First Time </button>
            <button> Can't Fool Me </button>
        </div>
    );
}