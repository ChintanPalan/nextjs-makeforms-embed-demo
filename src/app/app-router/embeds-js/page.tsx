"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const EmbedsApppage = () => {
  const initializeEmbed = () => {
    new window.makeforms.Embed({
      sourceId: "66a392b7920430ba1e7fae3a",
      root: "epcabzpyc",
    }).build();
  };

  return (
    <>
      {/* <script src="https://assets.frms.link/bundles/scripts/live/in/embed.js"></script> */}
      <Script
        src="https://assets.frms.link/bundles/scripts/live/in/embed.js"
        onLoad={() => initializeEmbed()}
      ></Script>
      <div
        id="epcabzpyc"
        className="makeforms-js-embed"
        style={{ position: "relative", height: "100%", minHeight: "500px" }}
      ></div>
    </>
  );
};

export default EmbedsApppage;
