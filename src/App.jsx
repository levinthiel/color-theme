import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/colorform/colorform";
import { useState } from "react";
import "./App.css";
import { uid } from 'uid';
import useLocalStorageState from 'use-local-storage-state'
import ThemeSwitch from "./Components/ThemeSwitch/ThemeSwitch";

function App() {

  const [newColors, setnewColors]= useLocalStorageState("newColors", {defaultValue: initialColors})
  const [emptyArray, setEmptyArray] = useState(false)


  /*---Add---------------------------------*/
  function handleAddColor(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setnewColors([{id: uid(), ...data}, ...newColors])
    console.log("added color",newColors)
    event.target.reset();
  }
  /*---Delete---------------------------------*/
  function yesDelete(id){
    const deletedColor = newColors.filter(color => color.id !== id);
    setnewColors(deletedColor)
    const message = newColors.length === 1 ? setEmptyArray(true) : "The array is not empty.";
    console.log(message);
  }
  /*---Edit---------------------------------*/
  function handleEdit(id, event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data)
    setnewColors(newColors.map((color) => color.id === id ? {...color, role: data.role, hex: data.hex, contrastText: data.contrastText} : color))
  }



  return (
    <>
      <h1>Theme Creator</h1>

      < ThemeSwitch onHandleThemes={newColors}/>

      < ColorForm onSubmit={handleAddColor} />
      {newColors.map((color) => {
        return <Color key={color.id} color={color} onDelete={yesDelete} onHandleEdit={handleEdit}/>;
      })}
      {emptyArray &&(
        <p>You have no more colours left, please consider adding some</p>
      )}
    </>
  );
}

export default App;
