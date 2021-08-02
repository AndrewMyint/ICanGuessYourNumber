import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";

export const Button = styled.div`
  ${tw`cursor-pointer w-full p-3 my-8 sm:my-10 sm:p-5 lg:text-2xl bg-green-600 hover:bg-green-400 rounded-lg text-center text-black `}
`;

export const Title = styled.h1`
  ${tw` mb-5 sm:mb-8 text-sm sm:text-xl md:text-2xl lg:text-3xl text-center font-sans tracking-wide font-extralight`}
`;

export const Card = styled.div`
  ${tw`w-full text-center p-2 sm:p-4 md:p-7 lg:p-9 text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-gray-900 bg-gray-400 rounded-lg shadow-lg `}
`;

export const Container = styled.div`
  background-color: #1f2123;
`;
