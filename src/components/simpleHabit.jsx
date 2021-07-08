import React, { useState, useRef, useCallback, useEffect } from "react";

const SimpleHabit = (props) => {
  // useState를 호출하게 되면 react에서는 Count와 setCount를 return해준다.
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mouted & upated ${count}`);
    // [count]는 카운트 값이 변경되었을 떄만 이 함수를 호출,
    // []만 호출하면 처음에만 호출하고 다음부터 호출을 안함
  }, [count]);
  return (
    <li className="habit">
      <span ref={spanRef} className="habit name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
