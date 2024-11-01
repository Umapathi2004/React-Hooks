import React, { Fragment, useState, useMemo, useCallback } from 'react';

const UseMemo = () => {
  const [dark, setDark] = useState(false);
  const [num, setNum] = useState(0);

  const style = {
    color: dark ? "#ffff" : "black",
    backgroundColor: dark ? "black" : "#ffff"
  };

  // Memoize the result of numResult
  const result =useMemo(() => {
    console.log("Usememo")
    return numResult(num)
}, [num]);
// const result = numResult(num)
console.log(result)
  return (
    <Fragment>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <div className="result" style={style}>{result+"1"}</div>
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
    </Fragment>
  );
};

// Simulate an expensive calculation
const numResult = (val) => {
  for (let i = 0; i <= 1000000000; i++) {} // reduced for efficiency
  return val * 2;
};

export default UseMemo;
