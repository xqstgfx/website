import {
  ExquisiteBitmapHeader,
  PixelBuffer,
} from "@exquisite-graphics/js/dist/ll_api";
import React, { useState } from "react";

const BLITMAP_HEADER: ExquisiteBitmapHeader = {
  version: 1,
  width: 32,
  height: 32,
  numColors: 4,
  scaleFactor: 0,
  alpha: false,
  backgroundIncluded: false,
  backgroundIndex: 0,
};

const Utils = () => {
  const [header, setHeader] = useState<ExquisiteBitmapHeader>(BLITMAP_HEADER);

  const headerData = new PixelBuffer(header).getHeader();

  return (
    <div>
      <h1>Utils</h1>

      <div className="flex flex-col gap-4">
        <div>
          <div className="flex gap-2 ">
            <label
              htmlFor="minmax-width"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Width
            </label>
            <p className="text-sm">{`- ${header.width}`}</p>
          </div>
          <input
            id="minmax-width"
            type="range"
            min="1"
            max="256"
            value={`${header.width === 0 ? "256" : header.width}`}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(event) =>
              setHeader({
                ...header,
                width: Number(
                  event.target.value === "256" ? "0" : event.target.value
                ),
              })
            }
          ></input>
        </div>

        <div>
          <div className="flex gap-2 ">
            <label
              htmlFor="minmax-height"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Height
            </label>
            <p className="text-sm">{`- ${header.height}`}</p>
          </div>

          <input
            id="minmax-height"
            type="range"
            min="1"
            max="256"
            value={`${header.height}`}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(event) =>
              setHeader({
                ...header,
                height: Number(
                  event.target.value === "256" ? "0" : event.target.value
                ),
              })
            }
          ></input>
        </div>

        <div>
          <div className="flex gap-2 ">
            <label
              htmlFor="minmax-numColors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Number of Colors
            </label>
            <p className="text-sm">{`- ${header.numColors}`}</p>
          </div>

          <input
            id="minmax-numColors"
            type="range"
            min="1"
            max="256"
            value={`${header.numColors}`}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(event) =>
              setHeader({
                ...header,
                numColors: Number(event.target.value),
              })
            }
          ></input>
        </div>

        <div>
          <div className="flex gap-2 ">
            <label
              htmlFor="minmax-scale"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Scale Factor
            </label>
            <p className="text-sm">{`- ${header.scaleFactor}`}</p>
          </div>

          <input
            id="minmax-scale"
            type="range"
            min="0"
            max="1024"
            value={`${header.scaleFactor}`}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(event) =>
              setHeader({
                ...header,
                scaleFactor: Number(event.target.value),
              })
            }
          ></input>
        </div>

        <div>
          <div className="flex gap-2 ">
            <label
              htmlFor="minmax-alpha"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Alpha
            </label>
            <p className="text-sm">{`- ${header.alpha}`}</p>
          </div>

          <input
            id="minmax-alpha"
            type="range"
            min="0"
            max="1"
            value={`${header.alpha == true ? "1" : "0"}`}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(event) =>
              setHeader({
                ...header,
                alpha: event.target.value == "1" ? true : false,
              })
            }
          ></input>
        </div>

        <div>
          <div className="flex gap-2 ">
            <label
              htmlFor="minmax-bgIncluded"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Background Included
            </label>
            <p className="text-sm">{`- ${header.backgroundIncluded}`}</p>
          </div>

          <input
            id="minmax-bgIncluded"
            type="range"
            min="0"
            max="1"
            value={`${header.backgroundIncluded == true ? "1" : "0"}`}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(event) =>
              setHeader({
                ...header,
                backgroundIncluded: event.target.value == "1" ? true : false,
              })
            }
          ></input>
        </div>

        <div>
          <div className="flex gap-2 ">
            <label
              htmlFor="minmax-bgIndex"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Background Index
            </label>
            <p className="text-sm">{`- ${header.backgroundIndex}`}</p>
          </div>

          <input
            id="minmax-bgIndex"
            type="range"
            min="0"
            max="255"
            value={`${header.backgroundIndex}`}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={(event) =>
              setHeader({
                ...header,
                backgroundIndex: Number(event.target.value),
              })
            }
          ></input>
        </div>

        <div>
          <h2 className="text-xl">Header Data</h2>
          <h3 className="text-lg">{headerData}</h3>
        </div>
      </div>
    </div>
  );
};

export default Utils;
