import Head from "next/head";
import Game from "../src/Game";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen py-2 text-white"
      style={{ backgroundColor: "#1f2123" }}
    >
      <Head>
        <title>I can guess your number </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" px-20">
        <div className="p-5 flex flex-col w-full text-center">
          <h1 className="font-sans text-3xl font-normal tracking-wider">
            I Can Guess Your Number
          </h1>
          <span className="text-sm text-white text-opacity-60">
            Built by{" "}
            <a
              href="https://github.com/AndrewMyint/iCanGuessYourNumber"
              className="underline hover:text-gray-100"
            >
              @AndrewMyint
            </a>
          </span>
        </div>
        <div className="px-10 pt-20 flex flex-col w-full items-center justify-center">
          <Game />
        </div>
      </main>

      <footer className="absolute bottom-8 flex items-center justify-center w-full h-10 text-sm text-white text-opacity-60">
        <div>
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
