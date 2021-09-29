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
      pokemonIndex: Math.floor(Math.random()*10),
      score: 0,
      bestScore: 0,
      passed: new Set(),
    }
  }

  handleFirstTimeClick = () => {
    const {passed, pokemonIndex} = this.state;
    if(passed.has(pokemonIndex)){
      this.gameOver();
    }else{
      this.addScoreandMoveForward(1);
    }
  }

  handleCantFoolMeClick = () =>{
    const {passed, pokemonIndex} = this.state;
    if(passed.has(pokemonIndex)){
      this.addScoreandMoveForward(2);
    }else{
      this.gameOver();
    }
  }

  gameOver = () => {
    console.log("game over");
    let newIndex = 0;
    while((newIndex=Math.floor(Math.random()*30))===this.state.pokemonIndex);
    this.setState({
      score: 0,
      pokemonIndex: newIndex,
      passed: new Set()
    });
  }

  addScoreandMoveForward = (addPoints) => {
    const {pokemonIndex,score,bestScore,passed} = this.state;
    let newIndex = 0;
    while((newIndex=Math.floor(Math.random()*10))===this.state.pokemonIndex);
    this.setState({
      pokemonIndex: newIndex, 
      passed: passed.add(pokemonIndex),
      score: score+addPoints,
      bestScore: bestScore < score+addPoints ? score+addPoints : bestScore,
    });
  }

  render(){
    const {pokemonIndex, score, bestScore} = this.state;
    return (
      <div id="container">
        <Header/>
        <Score score={score} bestScore={bestScore}/>
        <Card pokemonIndex={pokemonIndex}/>
        <Footer handleFirstTimeClick={this.handleFirstTimeClick} handleCantFoolMeClick = {this.handleCantFoolMeClick}/>
      </div>
    );
  }
}

export default App;