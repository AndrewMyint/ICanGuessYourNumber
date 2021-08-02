import Head from "next/head";
import Game from "../src/Game";
//bg-blue-500 sm:bg-yellow-400 md:bg-green-400 lg:bg-red-400 xl:bg-gray-500
export default function Home() {
  return (
    <div
      className="w-full min-h-screen  text-white "
      style={{ backgroundColor: "#1f2123" }}
    >
      <Head>
        <title>I can guess your number </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full px-2 sm:px-8">
        <div className="p-5 flex flex-col w-full text-center">
          <h1 className="font-sans text-sm xs:text-xl sm:text-3xl lg:text-4xl font-normal tracking-wider">
            I Can Guess Your Number
          </h1>
          <span className="text-xs sm:text-sm md:text-lg text-white text-opacity-60">
            Built by{" "}
            <a
              href="https://github.com/AndrewMyint/iCanGuessYourNumber"
              className="underline hover:text-gray-100"
            >
              @AndrewMyint
            </a>
          </span>
        </div>
        <div className="pt-12 sm:pt-18 md:pt-20  flex flex-col w-full items-center justify-center">
          <Game />
        </div>
      </main>

      <footer className="absolute bottom-1 sm:bottom-8 flex items-center justify-center w-full h-10 text-xs sm:text-sm md:text-md lg:text-xl text-white text-opacity-60">
        <div className="text-center">
          <span>Built with </span>{" "}
          <a
            href="https://nextjs.org/"
            className="text-blue-400 hover:text-blue-300"
          >
            {" "}
            NextJS
          </a>{" "}
          |{" "}
          <a
            href="https://www.styled-components.com/"
            className="text-blue-400 hover:text-blue-300"
          >
            Styled Components
          </a>{" "}
          |{" "}
          <a
            href="https://tailwindcss.com/"
            className="text-blue-400 hover:text-blue-300"
          >
            TailwindCSS
          </a>
        </div>
      </footer>
    </div>
  );
}
