import React, { useCallback, useMemo } from "react";
import { Button, Card } from "../../GlobalStyle";
import styled from "styled-components";
import tw from "twin.macro";
import { AnimatePresence, motion } from "framer-motion";

const H1 = styled.h1`
  ${tw`my-10 text-lg md:text-2xl font-sans tracking-wide font-light text-center`}
`;

const useTypicalAnimation = ({ text }) =>
  useMemo(() => {
    return (
      <AnimatePresence exitBeforeEnter>
        {text.split("").map((char, index) => (
          <motion.span
            key={`char-${index}`}
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.1 },
            }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    );
  }, [text]);

const index = (props) => {
  const { result, setGameState, reset, setReset } = props;
  const animatedTitle = useTypicalAnimation({ text: "Your number is ..." });

  return (
    <div className="">
      <H1>{animatedTitle}</H1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2 }}
      >
        <div className=" text-gray-900 bg-red-400  text-center p-7 text-xl font-bold rounded-lg shadow-lg ">
          {result}
        </div>
      </motion.div>

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
