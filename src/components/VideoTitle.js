import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black absolute text-white pt-[20%] px-24">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-lg rounded-lg text-black p-2 px-12 hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-lg rounded-lg text-white p-2 px-12 bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
