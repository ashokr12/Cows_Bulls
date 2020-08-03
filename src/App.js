import React, { Component } from "react";
import "./App.css";
import Game from "./Game";

class App extends Component {
  constructor() {
    super();

    this.state = {
      gamestat: {
        number: [],
        NormalMode: false,
        ChallengeMode: false,
        SelectMode: false,
      },
    };
  }

  randGenerate = () => {
    const Dig1Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const index1 = Math.floor(Math.random() * 9);
    const Dig1 = Dig1Arr[index1];

    const Dig2Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const Dig2Arr_Filt = Dig2Arr.filter((num, index) => index != index1 + 1);
    const index2 = Math.floor(Math.random() * 9);
    const Dig2 = Dig2Arr_Filt[index2];

    const Dig3Arr_Filt = Dig2Arr_Filt.filter((num, index) => index != index2);
    const index3 = Math.floor(Math.random() * 8);
    const Dig3 = Dig3Arr_Filt[index3];

    const Dig4Arr_Filt = Dig3Arr_Filt.filter((num, index) => index != index3);
    const index4 = Math.floor(Math.random() * 7);
    const Dig4 = Dig4Arr_Filt[index4];

    var num = [Dig1, Dig2, Dig3, Dig4];
    return num;
  };

  NormalMode = () => {
    var num = this.randGenerate();
    var game = this.state.gamestat;
    game.number = num;
    console.log(num);
    game.NormalMode = true;
    game.SelectMode = true;
    this.setState({ gamestat: game });
  };

  ChallengeMode = () => {
    var num = this.randGenerate();
    var game = this.state.gamestat;
    game.number = num;
    console.log(num);
    game.ChallengeMode = true;
    game.SelectMode = true;
    this.setState({ gamestat: game });
    console.log(this.state.gamestat);
  };

  render() {
    console.log("Called from App");
    return (
      <div className="App">
        <h1 style={{ color: "Pink" }}>Cows and Bulls</h1>
        <h2 style={{ color: "white" }}>Let's see what you've got!</h2>
        {this.state.gamestat.NormalMode ? (
          <Game correctAnswer={this.state.gamestat.number} />
        ) : this.state.gamestat.SelectMode ? (
          ""
        ) : (
          <button
            style={{
              width: "150px",
              height: "40px",
              fontSize: "25",
              fontWeight: "bold",
              borderRadius: "15px",
            }}
            onClick={this.NormalMode}
          >
            Start
          </button>
        )}

        <br />
        <br />
        {this.state.gamestat.ChallengeMode ? (
          <Game
            correctAnswer={this.state.gamestat.number}
            ChallengeMode={this.state.gamestat.ChallengeMode}
          />
        ) : this.state.gamestat.SelectMode ? (
          ""
        ) : (
          <button
            style={{
              width: "150px",
              height: "40px",
              fontSize: "25",
              fontWeight: "bold",
              borderRadius: "15px",
            }}
            onClick={this.ChallengeMode}
          >
            Challenge Mode
          </button>
        )}
      </div>
    );
  }
}

export default App;
