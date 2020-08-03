import React from "react";
import { Component } from "react";
import CalcResult from "./calcResult.jsx";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Answer: [
        { num: 2, id: 0 },
        { num: 4, id: 1 },
        { num: 6, id: 2 },
        { num: 8, id: 3 },
      ],
      disp: "none",
    };
  }

  handleChange = (event) => {
    var Ans = [...this.state.Answer];
    Ans[event.target.id].num = event.target.value;
    this.setState({ Answer: Ans }, () =>
      console.log("state changed", this.state.Answer)
    );
    this.setState({ disp: "none" }, () =>
      console.log("Disp state changed", this.state.disp)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.Answer);
    this.setState({ disp: "block" });
  };

  render() {
    var Ans = this.state.Answer.map((num, ind) => {
      return num.num;
    });
    return (
      <div>
        <h2 style={{ color: "white" }}>Guess the Number!</h2>
        {this.props.ChallengeMode ? (
          <h2 style={{ color: "red" }}>
            Challenge Mode: Guess the number in 5 Attempts or less!
          </h2>
        ) : (
          ""
        )}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {this.state.Answer.map((num, index) => (
            <div key={num.id}>
              <label style={{ margin: "5px 5px 10px 5px", color: "white" }}>
                {`Digit ${index + 1}`}
              </label>
              <input
                style={{
                  width: "50px",
                  borderBlockStartColor: "orange",
                  borderInlineWidth: "15px",
                }}
                value={num.num}
                id={num.id}
                onChange={this.handleChange}
                required
              ></input>
            </div>
          ))}
          <button
            style={{ width: "90px", margin: "20px", borderRadius: "10px" }}
          >
            Submit
          </button>
        </form>
        <br />
        <CalcResult
          Input={Ans}
          number={this.props.correctAnswer}
          disp={this.state.disp}
          ChallengeMode={this.props.ChallengeMode}
        />
      </div>
    );
  }
}
export default Game;
