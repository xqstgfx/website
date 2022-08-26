import Image from "next/image";
import React from "react";

type ProjectProps = {
  name: string;
  description: string;
  websiteURL?: string;
  logoURL?: string;
  githubURL?: string;
  discordURL?: string;
  contractURL?: string;
  openseaURL?: string;
  twitterURL?: string;
};

const Project = (props: ProjectProps) => {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4">
      <div className="flex gap-2">
        <img
          src={props.logoURL ?? "/xqstgfx.svg"}
          alt={`${props.name} Logo`}
          width="24px"
          height="24px"
        />
        <a className="text-lg" href={props.websiteURL}>
          {props.name}
        </a>
      </div>

      <p className="text-sm">{props.description}</p>

      <div className="flex gap-4">
        {props.websiteURL && (
          <a className="text-lg" href={props.websiteURL}>
            <img
              src="/web.svg"
              alt={`Icon for Web`}
              width="20px"
              height="20px"
            />
          </a>
        )}

        {props.githubURL && (
          <a className="text-lg" href={props.githubURL}>
            <img
              src="/github.svg"
              alt="Github Logo"
              width="20px"
              height="20px"
            />
          </a>
        )}

        {props.openseaURL && (
          <a className="text-lg" href={props.openseaURL}>
            <img
              src="/opensea.svg"
              alt="Opensea Logo"
              width="20px"
              height="20px"
            />
          </a>
        )}

        {props.twitterURL && (
          <a className="text-lg" href={props.twitterURL}>
            <img
              src="/twitter.svg"
              alt="Twitter Logo"
              width="20px"
              height="20px"
            />
          </a>
        )}

        {props.discordURL && (
          <a className="text-lg" href={props.discordURL}>
            <img
              src="/discord.svg"
              alt="Discord Logo"
              width="20px"
              height="20px"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
