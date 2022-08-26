import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between p-2 items-center">
      <a href="/">
        <Image
          width="32"
          height="16"
          src="/xqstgfx.svg"
          alt="exquiste graphics logo"
        />
      </a>

      <div className="flex gap-4 justify-end items-center">
        {/* <a className="border-2 rounded-lg p-2" href="/docs"> */}
        <a href="https://docs.exquisite.graphics/">DOCS</a>
        <a href="/genesis">MINT</a>
        {/* <a className="border-2 rounded-lg p-2" href="/about"> */}
        <a href="/about">ABOUT</a>
        {router.pathname === "/genesis" && <ConnectButton />}
      </div>
    </div>
  );
};

export default Header;
