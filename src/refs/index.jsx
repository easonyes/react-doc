import React, { useEffect } from "react";
// import FancyButton from "./fancyButton";
// import LogPropsHoc from "./logProps";
import ClassButton from "./classButton";
import FuncButton from "./funcButton";

const ref = React.createRef();
const ref1 = React.createRef();
const Index = () => {
  useEffect(() => {
    console.log(ref.current);
    console.log(ref1.current);
  }, []);

  return (
    <div className="App">
      <ClassButton ref={ref} />
      <FuncButton ref={ref1} />
    </div>
  );
};

export default Index;
