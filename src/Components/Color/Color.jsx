import "./Color.css";
import { useState } from "react"

export default function Color({ color, onDelete }) {

  const [isConfirmingDelete, setIsConfirmingDelete] = useState(true);

  function plsDelete(){
    setIsConfirmingDelete(false);
  }
  function plsCancel(){
    setIsConfirmingDelete(true);
  }
 

  return (
    <div className="color-card" style={{ background: color.hex, color: color.contrastText, }} >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <button type="button" className={isConfirmingDelete ? "" : "hidden"} onClick={plsDelete}>Delete</button>

      {/* -----Hidden Buttons -------------------------------------------------------------------- */}
      <section className={isConfirmingDelete ? "hidden" : ""}>
        <p className="color-card-highlight">
          Are you sure you want to delete this color ? 
        </p>  
        <button type="button"  onClick={plsCancel}>Cancel</button>
        <button type="button" onClick={() => onDelete(color.id)}>Yes Delete</button>
      </section>
      {/* -----Hidden Buttons -------------------------------------------------------------------- */}
    </div>
  );
}

