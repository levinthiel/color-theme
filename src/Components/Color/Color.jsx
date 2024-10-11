import "./Color.css";
import { useState } from "react"
import "../colorform/colorform.css";
import Colorinput from "../colorInput/colorinput";
import CopyColor from "../colorCopy/copyToClipboard"
import ContrastCheck from "../ContrastCheck/contrastCheck"


export default function Color({color, onHandleEdit, onDelete}) {

  const [isConfirmingDelete, setIsConfirmingDelete] = useState(true);
  const [isEdit, setIsEdit] = useState(true);

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
  /*------------------------------------------*/

  return (
    <div className="color-card" style={{ background: color.hex, color: color.contrastText, }} >
      <h3 className="color-card-highlight">{color.hex}</h3>
      < CopyColor color={color}/>
      < ContrastCheck foreground={color.contrastText} background={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      <button type="button" className={isConfirmingDelete ? "" : "hidden"} onClick={plsDelete}>Delete Color</button>

          {/* -----Hidden Buttons -------------------------------------------------------------------- */}
            <section className={isConfirmingDelete ? "hidden" : ""}>
              <p className="color-card-highlight">
                Are you sure {/* you want to delete this color  */}? 
              </p>  
              <button type="button"  onClick={plsCancel}>
                Cancel
              </button>
              <button type="button" onClick={() => onDelete(color.id)}>Yes Delete</button>
            </section>
          {/* -----Hidden Buttons -------------------------------------------------------------------- */}

      <button type="button" className={isEdit ? "" : "hidden"} onClick={() =>plsEdit()}>Edit </button>
          {/* -----Hidden edit -------------------------------------------------------------------- */}
          <section className={isEdit ? "hidden" : ""}>
            <form onSubmit={(event) => { onHandleEdit(color.id, event); }} >
              <label htmlFor="role">Role:</label>
              <input type="text" id="role" name="role" defaultValue={color.role} />
              <label htmlFor="hex">Hex:</label>
              <div>
                  <Colorinput id="hex" defaultValue={color.hex}/>
              </div>
              <label htmlFor="contrastText">Contrast text:</label>
              <div>
                  <Colorinput id="contrastText" defaultValue={color.contrastText} />
              </div>
              <input type="submit" className="inputBtn" value="Update Color" />
            </form>
            <button type="button"  onClick={plsCancelEdit}>Done Editing</button>
          </section>
          {/* -----Hidden edit -------------------------------------------------------------------- */}
    </div>
  );
}

