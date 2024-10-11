import "./colorform.css";
import Colorinput from "../colorInput/colorinput";

export default function ColorForm({onSubmit, onContrastCheck}){

    
    return (
        <form className="topform" onSubmit={(event) => {
                                onSubmit(event);
                                onContrastCheck(event);
                            }}>
            < fieldset className="colorname">
                <label htmlFor="role">Name:</label> <br/>
                <input type="text" id="role" name="role" placeholder="Latern Green" />
            </fieldset>
            <fieldset className="topcolorinput">
                <label htmlFor="hex">Hex:</label>
                <div>
                    <Colorinput id="hex" defaultValue="#54c73d"/>
                </div>
            </fieldset>
            <fieldset className="topcolorinput">
                <label htmlFor="contrastText">Contrast text:</label>
                <div>
                    <Colorinput id="contrastText" defaultValue="#000000" />
                </div>
            </fieldset>
            <button type="submit" className="inputBtn">
                Add Color
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16" 
                height="16"
                style={{ marginLeft: "8px" }}
                >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
            </button>
            {/* <input type="submit" className="inputBtn" value="Add Color" /> */}
        </form>
    );
}