import React, { Component } from "react";
import CalcResult2 from "./CalcResult2";

const CalcResult = (props) => {
  const Verify = (Arr1, Arr2) => {
    var cows = 0;
    var bulls = 0;
    for (var i = 0; i < 4; i++) {
      if (Arr1[i] == Arr2[i]) {
        cows++;
      } else {
        if (Arr2.includes(Arr1[i])) {
          bulls++;
        }
      }
    }
    return [cows, bulls];
  };
  var [c, b] = Verify(props.Input, props.number);

  return (
    <div>
      <CalcResult2
        num={props.Input}
        Cows={c}
        Bulls={b}
        disp={props.disp}
        ChallengeMode={props.ChallengeMode}
      />
    </div>
  );
};
export default CalcResult;
