import { Header } from "./components/Header.js";
import { Score } from "./components/Score.js";
import { Card } from "./components/Card.js";
import { Footer } from "./components/Footer.js";
import "./main.css";
import { Component } from "react";

class App extends Component {
render(){
    return (
      <div id="container">
        <Header/>
        <Score/>
        <Card/>
        <Footer/>
      </div>
    );
  }
}

export default App;