import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/colorform/colorform";
import { useState } from "react";
import "./App.css";
import { uid } from 'uid';


function App() {

  const [newColors, setnewColors]= useState(initialColors)
  const [emptyArray, setEmptyArray] = useState(false)

  function handleAddColor(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setnewColors([{id: uid(), ...data}, ...newColors])
    console.log(data)
    console.log(newColors)
    event.target.reset();
  }
  function yesDelete(id){
    const deletedColor = newColors.filter(color => color.id !== id);
    setnewColors(deletedColor)
    const message = newColors.length === 1 ? setEmptyArray(true) : "The array is not empty.";
    console.log(message);
  }



  return (
    <>
      <h1>Theme Creator</h1>

      < ColorForm onSubmit={handleAddColor} />
      {newColors.map((color) => {
        return <Color key={color.id} color={color} onDelete={yesDelete} />;
      })}
      {emptyArray &&(
        <p>You have no more colours left, please consider adding some</p>
      )}
    </>
  );
}

export default App;
