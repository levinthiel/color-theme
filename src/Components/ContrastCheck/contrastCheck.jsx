import { useState, useEffect } from "react";

export default function ContrastCheck({ foreground, background }) {
const [result, setResult] = useState();
  useEffect(() => {
    async function loadContrast(foreground, background) {
      try {
        const response = await fetch("https://www.aremycolorsaccessible.com/api/are-they", {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ colors: [foreground, background] })
        });
        const data = await response.json();
        console.log(data.overall);
        setResult(data.overall)
      } catch (error) {
        console.log(error);
      }
    }

    if (foreground && background) {
      loadContrast(foreground, background);
    }
  }, [foreground, background]); // Dependencies updated

  return (
    <p>{foreground && background ? `The contrast for this color is ${result}` : null}</p>
  );
}
