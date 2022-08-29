import React from "react";
import Image from "next/image";
import { useAccount, useContractRead, useProvider } from "wagmi";
import {
  exquisiteGenesisContract,
  GENESIS_ABI,
  GENESIS_ADDRESS,
} from "../features/genesisContract";
import { promiseNotify } from "../features/promiseNotify";
import { switchChain } from "../features/switchChain";
import { extractContractError } from "../features/extractContractError";
import { usePromiseFn } from "../features/usePromiseFn";
import { toast } from "react-toastify";

const Genesis = () => {
  const { connector } = useAccount();
  const { data, error, isLoading } = useContractRead({
    addressOrName: GENESIS_ADDRESS,
    contractInterface: GENESIS_ABI,
    functionName: "numMinted",
  });

  const numMinted = !isLoading && data ? `${data.toNumber()}` : "...";
  console.log(numMinted);

  const [mintResult, mint] = usePromiseFn(
    async (onProgress: (message: string) => void) => {
      if (!connector) {
        throw new Error("Wallet not connected");
      }

      onProgress("Preparing wallet…");
      await switchChain(connector);
      const signer = await connector.getSigner();
      const contract = exquisiteGenesisContract.connect(signer);
      const price = await contract.MINT_PRICE();

      try {
        onProgress(`Minting 1 token…`);

        const tx = await promiseNotify(
          contract.mint(1, { value: price })
        ).after(1000 * 5, () =>
          onProgress("Please confirm transaction in your wallet…")
        );
        console.log("mint tx", tx);

        onProgress("Finalizing transaction…");
        // @ts-ignore
        const receipt = await promiseNotify(tx.wait())
          .after(1000 * 15, () =>
            onProgress(
              "It can sometimes take a while to finalize a transaction…"
            )
          )
          .after(1000 * 30, () => onProgress("Still working on it…"));
        console.log("mint receipt", receipt);

        return { receipt };
      } catch (error) {
        console.error("Transaction error:", error);
        const contractError = extractContractError(error);
        throw new Error(`Transaction error: ${contractError}`);
      }
    },
    [connector]
  );

  return (
    <div>
      <Image
        src="/genesis.svg"
        alt="Exquisite Graphics Genesis Token Image"
        width="384px"
        height="384px"
      />
      <h1 className="text-xl font-bold">Exquisite Graphics Genesis Token</h1>
      <p className="pb-5 max-w-xl">
        The Exquisite Graphics Genesis Token supports the development of
        Exquisite Graphics and helps to fund the development of graphics
        projects on the blockchain.
        <br />
        <br />
        The token in an ERC1155 with 1,011 Editions. Each edition costs .064
        ETH.
        <br />
        <br />
      </p>
      <div className="flex flex-col gap-2 items-center">
        <button
          className="border-2 rounded-lg p-6"
          //   pending={mintResult.type === "pending"}
          onClick={(event) => {
            event.preventDefault();
            const toastId = toast.loading("Starting…");
            mint((message) => {
              toast.update(toastId, { render: message });
            }).then(
              () => {
                // TODO: show etherscan link?
                toast.update(toastId, {
                  isLoading: false,
                  type: "success",
                  render: `Minted!`,
                  autoClose: 5000,
                  closeButton: true,
                });
              },
              (error) => {
                toast.update(toastId, {
                  isLoading: false,
                  type: "error",
                  render: String(error.message),
                  autoClose: 5000,
                  closeButton: true,
                });
              }
            );
          }}
        >
          Mint Genesis Token
        </button>
        <p id="test">{numMinted}/1111 Minted</p>
      </div>
    </div>
  );
};

export default Genesis;
