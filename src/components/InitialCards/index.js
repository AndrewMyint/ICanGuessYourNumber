import React from "react";
import { Button, Title, Card } from "../../GlobalStyle";
import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";

const Grid = styled.div`
  ${tw`py-10 grid grid-cols-7 gap-5`}
`;

const Mark = styled.mark`
  background-color: gray;
  padding: 0 5px 0 5px;
  font: bold;
`;

const index = (props) => {
  const { handleOnClick, initialNumbers } = props;

  console.log("initialNumber:___ ", initialNumbers);
  return (
    <div>
      <Title>
        Please pick <Mark>one</Mark> number, and keep it in your mind, then go
        to "Next".
      </Title>
      <Grid>
        {initialNumbers.map((value, i) => (
          // <motion.div
          //   initial={{ rotateY: 180 }}
          //   animate={{ rotateY: 0 }}
          //   transition={{ duration: 1 }}
          //   key={i}
          // >
          <Card key={`initCard_${value}_${i}`}>{value}</Card>
          // </motion.div>
        ))}
      </Grid>
      <Button onClick={handleOnClick}>Next</Button>
    </div>
  );
};

export default index;
