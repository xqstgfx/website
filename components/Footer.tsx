import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center pt-7 gap-1 pb-2">
      <div className="flex gap-4">
        <a href="https://etherscan.io/address/0xDf01A4040493B514605392620B3a0a05Eb8Cd295">
          Contract
        </a>
        &bull;{" "}
        <a href="https://www.npmjs.com/package/@exquisite-graphics/js">NPM</a>{" "}
        &bull;{" "}
        <a href="https://github.com/xqstgfx/exquisite-graphics">GitHub</a>
      </div>
      <div className="flex gap-2 justify-center">
        Crafted by <a href="https://relational.fyi">Relational</a>
      </div>
    </div>
  );
};

export default Footer;
