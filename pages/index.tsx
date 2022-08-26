import type { NextPage } from "next";
import Project from "../components/Project";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Image
        src="/xqstgfx.svg"
        alt="Exquisite Graphics Logo"
        width="512px"
        height="256px"
      />
      <h1 className="text-xl font-bold">Powering On-Chain Pixel Art</h1>
      <p className="pb-5">
        Exquisite Graphics is a state-of-the-art on-chain pixel art rendering
        engine accessible to everyone.
        <br />
        Exquisite Graphics is a public good.
        <br />
        Exquisite Graphics proliferates and funds graphics projects
        <br />
        story or something
        <br />
        something about the `.xqst` file format
      </p>

      <h3 className="text-xl font-bold">Built with Exquisite Graphics</h3>
      <div className="flex flex-col gap-4 max-w-lg">
        <Project
          name="Exquisite Land"
          description="Collaborative Pixel Art Game"
          websiteURL="https://exquisite.land"
          logoURL="https://exquisite.land/favicon.ico"
          githubURL="https://github.com/relational-os/exquisite-land"
          discordURL="https://discord.gg/pma4YtD6xW"
          contractURL="https://polygonscan.com/address/0x921ec5eaadc92c134ca93b0a6558f3759e93ad3e"
          openseaURL="https://opensea.io/collection/exquisite-land-terra-masu"
          twitterURL="https://twitter.com/exquisiteland"
        />

        <Project
          name="OKPC"
          description="On-Chain toy that lets you create, collect, and share artwork"
          websiteURL="https://okpc.app"
          logoURL="https://okpc.app/images/logo.png"
          // githubURL=""
          discordURL="https://discord.gg/52ZSXgfe"
          contractURL="https://etherscan.io/address/0x7183209867489e1047f3a7c23ea1aed9c4e236e8"
          openseaURL="https://opensea.io/collection/okpc"
          twitterURL="https://twitter.com/okpcnft"
        />

        <Project
          name="Exquisite Graphics Genesis Token"
          description="The first fully on-chain 64x64 pixel art in 256 Colors"
          contractURL="https://etherscan.io/address/0xe1a2c5b67e595bb672bc6b03ecd731881c158a89"
          openseaURL="https://opensea.io/assets/ethereum/0xe1a2c5b67e595bb672bc6b03ecd731881c158a89/0"
          twitterURL="https://twitter.com/xqstgfx"
        />

        <Project
          name="ICE64"
          description="ICE64 is a series of 16 photographs by Sam King, documenting the desolate landscape of Iceland during the winter, enduring harsh yet beautiful conditions. Every image is an original 1 of 1 NFT, with an accompanying edition of a smaller SVG based artwork."
          contractURL="https://etherscan.io/address/0x6d36745510dC7a75570755B295694e8Ec625b7d2"
          twitterURL="https://twitter.com/samkingco"
          openseaURL="https://opensea.io/collection/ice64"
          logoURL="https://ice64.com/favicon.ico"
        />

        <Project
          name="Exquisite Canvas"
          description="Exquisite Canvas makes it easy to create Exquisite Graphics compatible pixel art"
          websiteURL="https://www.exquisitecanvas.xyz/"
          logoURL="https://www.exquisitecanvas.xyz/favicon.ico"
          twitterURL="https://twitter.com/ivyrootcode/status/1559978614858194945"
        />

        {/* <ul>
          <li className="flex">
            <a href="https://exquisite.land">Exquisite Land</a>
          </li>
          <li>
            <a href="https://okpc.app">OKPC</a>
          </li>
          <li>
            <a href="https://etherscan.io/address/0xe1a2c5b67e595bb672bc6b03ecd731881c158a89#writeContract">
              Exquisite Genesis
            </a>
          </li>
          <li>
            <a href="https://ice64.com/">ICE64</a>
          </li>
          <li>
            <a href="https://exquisitecanvas.xyz">Exquisite Canvas</a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Home;
