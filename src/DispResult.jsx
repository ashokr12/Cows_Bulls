import React from "react";
import "./DispResult.css";

function DispResult(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  var count = 0;
  props.data.map((attempt, index) => {
    if (attempt.Disp == "block") {
      count++;
    }
  });
  return (
    <div>
      <h4 style={{ color: "white", fontSize: "30px" }}>
        No.of attempts: {count}{" "}
      </h4>
      {props.ChallengeMode && count == 5 ? (
        <div>
          <h2 style={{ color: "red" }}>Game Over!!</h2>
          <button
            style={{
              width: "150px",
              height: "30px",
              margin: "10px",
              fontSize: "25",
              borderRadius: "15px",
            }}
            onClick={refreshPage}
          >
            Play Again!
          </button>
        </div>
      ) : (
        ""
      )}
      <ul
        key="5"
        style={{ margin: "5px", color: "white", listStyleType: "none" }}
      >
        {props.data.map((attempt, index) =>
          attempt.cows == 4 && attempt.Disp == "block" ? (
            <div style={{ color: "Orange" }}>
              <h2>"Congrats!!", the number is {attempt.numb}</h2>
              <br />
              <button
                style={{
                  width: "150px",
                  height: "30px",
                  margin: "10px",
                  fontSize: "25",
                  borderRadius: "15px",
                }}
                onClick={refreshPage}
              >
                Play Again!
              </button>
            </div>
          ) : (
            <li
              style={{ textAlign: "center", float: "centre" }}
              className={attempt.Disp}
              key={attempt.numb}
            >
              <span key={attempt.numb} style={{ color: "white" }}>
                {attempt.numb} has {attempt.cows} cows and {attempt.bulls} bulls
              </span>
            </li>
          )
        )}
        <br />
      </ul>
    </div>
  );
}

export default DispResult;
