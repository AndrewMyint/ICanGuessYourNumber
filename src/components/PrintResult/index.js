import React from "react";
import { Button, Card } from "../../GlobalStyle";
import styled from "styled-components";
import tw from "twin.macro";

const H1 = styled.h1`
  ${tw`my-10 text-lg font-sans tracking-wide font-light text-center`}
`;

const index = (props) => {
  const { result, setGameState, reset, setReset } = props;
  return (
    <div className="">
      <H1>Your number is ...</H1>

      <div className=" text-gray-900 bg-red-400  text-center p-7 text-xl font-bold rounded-lg shadow-lg ">
        {result}
      </div>

      <Button
        onClick={() => {
          setGameState(1);
          setReset(!reset);
        }}
      >
        Reset
      </Button>
    </div>
  );
};

export default index;
