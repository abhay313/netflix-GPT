import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black absolute text-white pt-[20%] px-6 md:px-24">
      <h1 className="font-bold text-xl md:text-4xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="my-3 md:m-0">
        <button className="bg-white text-lg rounded-lg text-black py-1 md:py-2 px-4 md:px-12 hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-lg rounded-lg text-white p-2 px-12 bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
