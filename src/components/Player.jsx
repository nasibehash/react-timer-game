import { useState, useRef } from "react";
export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);
  const playerName = useRef();

  function changeHandler(event) {
    setPlayerName(event.target.value);
  }

  function clickHandler() {
    setPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        {/* <input onChange={changeHandler} value={enteredPlayerName} type="text" /> */}
        <input ref={playerName} type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
