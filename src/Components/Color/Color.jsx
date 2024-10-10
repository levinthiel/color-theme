import "./Color.css";
import { useState } from "react"
import "../colorform/colorform.css";
import Colorinput from "../colorInput/colorinput";

export default function Color({ color, onDelete }) {

  const [isConfirmingDelete, setIsConfirmingDelete] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const [currentColor, setCurrentColor] = useState(color)

  /*---Delete---------------------------------*/
  function plsDelete(){
    setIsConfirmingDelete(false);
  }
  function plsCancel(){
    setIsConfirmingDelete(true);
  }
  /*----Edit----------------------------------*/
  function plsEdit(){
    setIsEdit(false);
  }
  function plsCancelEdit(){
    setIsEdit(true);
  }
  function handleEdit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data)
    setCurrentColor({id: color.id, role: data.role, hex: data.hex, contrastText: data.contrastText})
  }
  /*------------------------------------------*/

  return (
    <div className="color-card" style={{ background: currentColor.hex, color: currentColor.contrastText, }} >
      <h3 className="color-card-highlight">{currentColor.hex}</h3>
      <h4>{currentColor.role}</h4>
      <p>contrast: {currentColor.contrastText}</p>
      <button type="button" className={isConfirmingDelete ? "" : "hidden"} onClick={plsDelete}>Delete Color</button>

          {/* -----Hidden Buttons -------------------------------------------------------------------- */}
            <section className={isConfirmingDelete ? "hidden" : ""}>
              <p className="color-card-highlight">
                Are you sure {/* you want to delete this color  */}? 
              </p>  
              <button type="button"  onClick={plsCancel}>
                Cancel
              </button>
              <button type="button" onClick={() => onDelete(currentColor.id)}>Yes Delete</button>
            </section>
          {/* -----Hidden Buttons -------------------------------------------------------------------- */}

      <button type="button" className={isEdit ? "" : "hidden"} onClick={plsEdit}>Edit </button>
          {/* -----Hidden edit -------------------------------------------------------------------- */}
          <section className={isEdit ? "hidden" : ""}>
            <form onSubmit={handleEdit} >
              <label htmlFor="role">Role:</label>{/* <br/> */}
              <input type="text" id="role" name="role" defaultValue={currentColor.role} />
              <label htmlFor="hex">Hex:</label>
              <div>
                  <Colorinput id="hex" defaultValue={currentColor.hex}/>
              </div>
              <label htmlFor="contrastText">Contrast text:</label>
              <div>
                  <Colorinput id="contrastText" defaultValue={currentColor.contrastText} />
              </div>
              <input type="submit" className="inputBtn" value="Update Color" />
            </form>
            <button type="button"  onClick={plsCancelEdit}>Done Editing</button>
          </section>
          {/* -----Hidden edit -------------------------------------------------------------------- */}
    </div>
  );
}

