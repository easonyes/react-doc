import React, { useState, useEffect, useCallback } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const fn = useCallback(() => {
    setCount(2);
  }, []);

  useEffect(() => {
    fn();
  }, [fn]);

  return (
    <div style={{ margin: "50px" }}>
      <div>{count}</div>
      <button onClick={() => setCount((x) => x + 1)}>增加</button>
    </div>
  );
};

export default Index;
