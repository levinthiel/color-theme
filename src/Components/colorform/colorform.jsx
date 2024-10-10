import "./colorform.css";
import Colorinput from "../colorInput/colorinput";

export default function ColorForm({onSubmit}){


    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="role">Role:</label>{/* <br/> */}
            <input type="text" id="role" name="role" />
            <label htmlFor="hex">Hex:</label>
            <div>
                <Colorinput id="hex" defaultValue="#54c73d"/>
            </div>
            <label htmlFor="contrastText">Contrast text:</label>
            <div>
                <Colorinput id="contrastText" defaultValue="#000000" />
            </div>
            <input type="submit" className="inputBtn" value="Add Color" />
        </form>
    );
}