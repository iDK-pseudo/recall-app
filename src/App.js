import { Header } from "./components/Header.js";
import { Score } from "./components/Score.js";
import { Card } from "./components/Card.js";
import { Footer } from "./components/Footer.js";
import "./main.css";
import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonIndex: Math.floor(Math.random()*30),
      score: 0,
      bestScore: 0,
      passed: new Set(),
    }
  }

  handleFirstTimeClick = () => {
    const newIndex = Math.floor(Math.random()*30);
    const {pokemonIndex,score,bestScore,passed} = this.state;
    if(passed.has(pokemonIndex)){
      alert("Over");
      this.setState({
        score: 0,
        pokemonIndex: newIndex,
        passed: new Set()
      });
      return;
    }
    this.setState({
      pokemonIndex: newIndex, 
      passed: passed.add(pokemonIndex),
      score: score+1,
      bestScore: bestScore < score+1 ? score+1 : bestScore,
    });
  }

  render(){
    const {pokemonIndex, score, bestScore} = this.state;
    return (
      <div id="container">
        <Header/>
        <Score score={score} bestScore={bestScore}/>
        <Card pokemonIndex={pokemonIndex}/>
        <Footer handleFirstTimeClick={this.handleFirstTimeClick}/>
      </div>
    );
  }
}

export default App;