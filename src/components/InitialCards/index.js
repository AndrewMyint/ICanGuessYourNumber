import React, { useEffect, useState } from "react";
import { Button, Title, Card } from "../../GlobalStyle";
import styled from "styled-components";
import tw from "twin.macro";
import { motion, AnimatePresence } from "framer-motion";

const Grid = styled.div`
  ${tw`py-8 sm:py-10 grid grid-cols-7 gap-2 sm:gap-5`}
`;

const Mark = styled.mark`
  background-color: gray;
  padding: 0 5px 0 5px;
  font: bold;
`;

const text = 'Memorize a number in your mind, then go to "Next".';

const index = (props) => {
  const { handleOnClick, initialNumbers } = props;

  return (
    <div>
      <AnimatePresence>
        <motion.div
          style={{ gap: "4px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            >
              {char}
            </motion.span>
          ))}

          <AnimatePresence>
            {/* {showNumbers && ( */}
            <motion.div
              style={{ display: "flex", gap: "4px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: text.length * 0.03 }}
            >
              <Grid>
                {initialNumbers.map((value, i) => (
                  <motion.div
                    key={`initCard_${value}_${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: text.length * 0.05 + i * 0.1,
                    }}
                  >
                    <Card>{value}</Card>
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: (text.length + initialNumbers.length) * 0.04,
            }}
          >
            <Button onClick={handleOnClick}>Next</Button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default index;
