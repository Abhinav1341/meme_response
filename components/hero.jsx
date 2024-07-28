import Image from "next/image";
import ChangingText from "./change";

const Hero = () => {
  return (
    <main className=" h-[75vh] py-16 flex flex-col items-center">
      <div className="flex flex-row gap-4 items-center">
        <Image src="/favicon.png" height={60} width={60} alt="icon" />
        <h1 className="text-4xl">Meme HTTP Response</h1>
      </div>
      <h2 className="text-xl py-3 font-light">API for HTTP Response : MEMES</h2>
      <ChangingText />
      <h3 className=" text-[1rem] font-light text-gray-400">
        go to api/status for .json structure
      </h3>
      <div className=" text-base py-2 my-2 px-5 hover:opacity-85  bg-gray-700 border border-gray-300 rounded">
        <a
          class="github-button"
          href="https://github.com/Abhinav1341/meme_response"
          target="_blank"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
        >
          Star
        </a>
      </div>
    </main>
  );
};

export default Hero;
