import React from "react";
// import Index from "./refs";
import Index from "./hook";
// import Index from "./renderProps";
// import HocIndex from "./hocs";
// import ProfilerIndex from "./profiler";

function onRenderCallback(
  id, // 发生提交的 Profiler 树的 “id”
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
  actualDuration, // 本次更新 committed 花费的渲染时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions // 属于本次更新的 interactions 的集合
) {
  // console.log(id, "id");
  // console.log(phase, "phase");
  // console.log(actualDuration, "actualDuration");
  // console.log(baseDuration, "baseDuration");
  // console.log(startTime, "startTime");
  // console.log(commitTime, "commitTime");
  // console.log(interactions, "interactions");
}

function App() {
  return (
    <div className="App">
      <React.Profiler id="apptest" onRender={onRenderCallback}>
        <Index />
      </React.Profiler>
    </div>
  );
}

export default App;
