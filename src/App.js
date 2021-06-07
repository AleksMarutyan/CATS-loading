import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./styles/scss/app.scss";
import Main from "./components/Main/main";
import Menu from "./components/Menu/menu";
import { getData } from "./redux/actions/works";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  });
  return (
    <div className="App">
      <Menu />
      <Main />
    </div>
  );
}

export default App;
