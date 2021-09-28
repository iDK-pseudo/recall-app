import { Header } from "./Components/Header.js";
import { Score } from "./Components/Score.js";
import { Card } from "./Components/Card.js";
import { Footer } from "./Components/Footer.js";
import "./main.css";

function App() {
  return (
    <div id="container">
      <Header/>
      <Score/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;