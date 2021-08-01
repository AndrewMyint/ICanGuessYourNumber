import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";

export const Button = styled.div`
  ${tw`cursor-pointer w-full my-10 p-5 bg-green-600 hover:bg-green-400 rounded-lg text-center text-black `}
`;

export const Title = styled.h1`
  ${tw` mb-10 text-xl text-center font-sans tracking-wide font-extralight`}
`;

export const Card = styled.div`
  ${tw` text-center p-7 text-xl font-bold text-gray-900 bg-gray-400 rounded-lg shadow-lg `}
`;

export const Container = styled.div`
  background-color: #1f2123;
`;
