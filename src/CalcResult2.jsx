import React, { useState, useEffect } from "react";
import DispResult from "./DispResult";

function CalcResult2({ num, Cows, Bulls, disp, ChallengeMode }) {
  const [Attempt, setAtt] = useState([]);

  useEffect(() => {
    setAtt([
      ...Attempt,
      {
        numb: num,
        cows: Cows,
        bulls: Bulls,
        Disp: disp,
      },
    ]);
  }, [num, Cows, Bulls, disp, ChallengeMode]);

  return (
    <div>
      <DispResult data={Attempt} ChallengeMode={ChallengeMode} />
    </div>
  );
}

export default CalcResult2;
