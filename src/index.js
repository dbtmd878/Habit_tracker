import React from "react";
// 1. react-dom이라는 라이브러리에서 ReactDom 클래스를 가져온다.(import)
import ReactDOM from "react-dom";
import "./index.css";
// app.jsx 연결
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/simpleHabit";

// 2. 가져온 class에 있는 rander 함수를 이용해서
ReactDOM.render(
  // React.StrictMode 생략가능 대신 <App />, 이렇게 작성
  <React.StrictMode>
    {/*app.jsx에 있는 App이라는 컴포넌트에 연결한다.*/}
    <App />
  </React.StrictMode>,
  // 3. document에 root라는 아이디를 가진 요소에 제일 상위에 있는 App이라는 컴포넌트를 연결
  document.getElementById("root")
);
