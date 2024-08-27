'use client'
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

// Add your Client ID here ⬇️
const clientId = "caacdf9d-3f7e-42ee-aa00-ca9e72302313";

const Bot = () => {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div
      style={{
        // position: "fixed",
        // bottom: "20px",
        // right: "0px",
        //left:"20px",
        width: "400px", // Adjust the width as needed
        // zIndex: 50,
      }}
    >
      <style>{style}</style>
      <WebchatProvider theme={theme} client={client}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? "block" : "none",
            width: "100%",
            height: "500px", // Adjust the height as needed
            maxHeight: "80vh",
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
};

export default Bot;