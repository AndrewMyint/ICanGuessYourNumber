import React, { useEffect, useState } from "react";
import InitialCards from "./components/InitialCards/index";
import ShuffleCards from "./components/ShuffleCards/index";
import StartGame from "./components/StartGame/index";
import PrintResult from "./components/PrintResult/index";
import { createDeck } from "./helper";

// const initialNumbers = createDeck();

const Game = () => {
  const [gameState, setGameState] = useState(1);
  const [initialNumbers, setInitialNumbers] = useState([]);
  const [result, setResult] = useState();
  const [reset, setReset] = useState(false);
  const handleOnClick = (e) => {
    e.preventDefault();
    gameState < 5 ? setGameState(gameState + 1) : setGameState(0);
  };
  useEffect(() => {
    setInitialNumbers(createDeck());
  }, [reset]);

  return (
    <section className="h-full">
      {/* {gameState === 0 ? (
        <StartGame
          handleOnClick={handleOnClick}
          setInitialNumbers={setInitialNumbers}
        />
      ) : (
        ""
      )} */}
      {gameState === 1 ? (
        <InitialCards
          initialNumbers={initialNumbers}
          handleOnClick={handleOnClick}
        />
      ) : (
        ""
      )}
      {gameState > 1 && gameState < 5 ? (
        <ShuffleCards
          initialNumbers={initialNumbers}
          gameState={gameState}
          setGameState={setGameState}
          setResult={setResult}
        />
      ) : (
        ""
      )}
      {gameState === 5 ? (
        <PrintResult
          setGameState={setGameState}
          result={result}
          setReset={setReset}
          reset={reset}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default Game;
