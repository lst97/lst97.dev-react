"use client";
import figlet from "figlet";
import doom from "figlet/importable-fonts/Doom.js";
import { useEffect, useState } from "react";

export function AsciiTextGenerator(text) {
  const [asciiArtText, setAsciiArtText] = useState(
    ""
  );

  useEffect(() => {
    figlet.parseFont("Doom", doom);


    figlet(
      text.text,
      {
        font: "Doom",
      },
      function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        // Split the ASCII art text into an array of characters
        const textArray = data.split("");

        // Create an array to display the ASCII art text with spaces
        const displayArray = new Array(textArray.length).fill(" ");
        for (let i = 0; i < displayArray.length; i += 35) {
          displayArray[i] = "\n";
        }

        // Create an array of remaining indices to randomly select characters from
        const remainingIndices = [...textArray.keys()];

        // Set the batch size for updating characters
        const batchSize = 8;

        // Create an array to store batch updates
        let batchUpdates = [];

        // Set up a typing effect interval
        const typingEffect = setInterval(() => {
          // Add character updates to the batch
          for (let i = 0; i < batchSize && remainingIndices.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * remainingIndices.length);
            const index = remainingIndices.splice(randomIndex, 1)[0];
            batchUpdates.push({ index, char: textArray[index] });
          }

          // Update the display array with the characters from the batch updates
          batchUpdates.forEach(({ index, char }) => {
            displayArray[index] = char;
          });
          batchUpdates = [];

          // Update the state with the updated display array
          setAsciiArtText(displayArray.join(""));

          // Check if all characters have been displayed
          if (remainingIndices.length === 0) {
            clearInterval(typingEffect);
          }
        }, 25);

      }
    );
  }, [text]);

  return (
    <div className="h-64"><pre className="min-w-96 max-w-96 overflow-clip text-center">{`${asciiArtText}`}</pre></div>);
}
