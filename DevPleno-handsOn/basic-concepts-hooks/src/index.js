import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//elemento
const elemento = <div><h2>Olá DevPleno!</h2></div> //JSX 
const elemento2 = React.createElement('div', null, React.createElement('h2', null, 'Olá DevPleno!'))

const MostrarI = (props) => {
  return <p>{props.i}</p>
}

// componente: functional component
function App(props) {
  const [i, setI] = useState(1)

  const increment = () => {
    setI(i + 1)
  }

  return (
    <div className="App">
      <h1>Hello {props.name} {i}</h1>
      <button onClick={increment}>Incrementar</button>
      <MostrarI i={i} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="DevPleno" />, rootElement);