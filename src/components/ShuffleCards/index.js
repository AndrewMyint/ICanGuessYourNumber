import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { distributeCard, changedHead, takeBackTheCards } from "../../helper";
import { Button, Title, Card } from "../../GlobalStyle";
import { CheckIcon } from "@heroicons/react/outline";

const Flex = styled.div`
  ${tw`flex flex-row`}
`;

const GroupCol = styled.div`
  ${tw`mx-2 sm:mx-5`}
`;
const GridItems = styled.div`
  ${tw`grid grid-cols-2 gap-2 sm:gap-5`}
`;

const H1 = styled.div`
  ${tw` text-sm md:text-lg  font-sans tracking-wide font-light text-center my-5 sm:my-8`}
`;

const Icon = styled.div`
  ${tw` `}
  svg {
    width: 30px;
    height: 30px;
    margin: auto;
  }
`;

const index = (props) => {
  const { initialNumbers, setGameState, gameState, setResult } = props;
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);
  const [group3, setGroup3] = useState([]);
  const [curDeck, setCurDeck] = useState([]);
  const [curGroup, setCurGroup] = useState(null);
  const [toogleBtn, setToogleBtn] = useState(0);
  const [curHead, setCurHead] = useState(null);

  useEffect(() => {
    let initialHead = distributeCard(initialNumbers);
    generateGroup(initialHead);
    setCurHead(initialHead);
  }, []);

  useEffect(() => {
    if (curGroup !== null) {
      let tempHead = changedHead(curHead, curGroup);
      let newDeck = takeBackTheCards(tempHead);
      setCurDeck(newDeck);
      let newHead = distributeCard(newDeck);

      setCurHead(newHead);
      generateGroup(newHead);
      if (toogleBtn === 3) {
        console.log("newDeck: ", newDeck);
        setResult(newDeck[10]);
      }

      setGameState(gameState + 1);
    }
  }, [toogleBtn]);

  const generateGroup = (head) => {
    let temp = head;
    let array = [];
    do {
      array.push(temp);
      temp = temp.next;
    } while (temp !== head);
    /**
     * initialize the cards into group
     */
    setGroup1(array[0].card.map((d) => d));
    setGroup2(array[1].card.map((d) => d));
    setGroup3(array[2].card.map((d) => d));
  };

  const generateViewGroup = (group) => {
    return group.map((d, i) => <Card key={`card__${d}__${i}`}>{d}</Card>);
  };

  const handleChooseGroup = (e, group) => {
    let count = toogleBtn + 1;
    e.preventDefault();
    setCurGroup(parseInt(group));
    setToogleBtn(count);
  };
  const generateTitle = (toogleBtn) => {
    let text = "";
    switch (toogleBtn) {
      case 1:
        text = "One more time, which group has your number?";
        break;
      case 2:
        text = "One last time, which group has your number?";
        break;
      default:
        text = "Which group has your number?";
        break;
    }
    return text;
  };

  return (
    <div>
      <Title className="">{generateTitle(toogleBtn)}</Title>
      <Flex>
        <GroupCol>
          <H1>Group 1</H1>
          <GridItems>{generateViewGroup(group1)}</GridItems>
          <Button onClick={(e) => handleChooseGroup(e, 1)}>
            <Icon>
              <CheckIcon />
            </Icon>
          </Button>
        </GroupCol>
        <GroupCol>
          <H1>Group 2</H1>
          <GridItems>{generateViewGroup(group2)}</GridItems>
          <Button onClick={(e) => handleChooseGroup(e, 2)}>
            <Icon>
              <CheckIcon />
            </Icon>
          </Button>
        </GroupCol>
        <GroupCol>
          <H1>Group 3</H1>
          <GridItems>{generateViewGroup(group3)}</GridItems>
          <Button onClick={(e) => handleChooseGroup(e, 3)}>
            <Icon>
              <CheckIcon />
            </Icon>
          </Button>
        </GroupCol>
      </Flex>
    </div>
  );
};

export default index;
