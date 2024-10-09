import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/colorform/colorform";
import { useState } from "react";
import "./App.css";
import { uid } from 'uid';

function App() {

  const [newColors, setnewColors]= useState(initialColors)

  function handleAddColor(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setnewColors([{id: uid(), ...data}, ...initialColors])
    console.log(data)
    console.log(newColors)
    event.target.reset();
  }


  return (
    <>
      <h1>Theme Creator</h1>

      < ColorForm onSubmit={handleAddColor} />
      {newColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
