import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.div`
  ${tw`cursor-pointer w-full p-3 my-8 sm:my-10 sm:p-5 bg-green-600 hover:bg-green-400 rounded-lg text-center text-black `}
`;

export const Title = styled.h1`
  ${tw`mb-2 sm:mb-8 text-sm sm:text-lg md:text-xl text-center font-sans tracking-wide font-extralight`}
`;

export const Card = styled.div`
  ${tw`animate-fade w-full text-center p-2 sm:p-4 md:p-7 text-xs sm:text-base md:text-xl  font-bold text-gray-900 bg-gray-400 rounded-lg shadow-lg `}
`;

export const Container = styled.div`
  background-color: #1f2123;
`;
