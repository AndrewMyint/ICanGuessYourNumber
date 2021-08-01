import React from "react";
import { Button, Title } from "../../GlobalStyle";
import { createDeck } from "../../helper";

const index = (props) => {
  const { handleOnClick, setInitialNumbers } = props;

  const handleStartGame = (e) => {
    setInitialNumbers(createDeck());
    handleOnClick(e);
  };

  return (
    <div>
      <Title>
        <h1>WELCOME TO NUMBER GUESSING GAME</h1>
      </Title>
      <Button onClick={handleStartGame}>START GAME</Button>
    </div>
  );
};

export default index;
