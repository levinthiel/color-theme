import "./colorform.css";
import Colorinput from "../colorInput/colorinput";

export default function ColorForm({onSubmit}){


    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="role">Role:</label><br/>
            <input type="text" id="role" name="role" value="some color"/><br/>
            <label htmlFor="hex">Hex:</label><br/>
            <Colorinput id="hex" defaultValue="#54c73d"/><br/>
            <label htmlFor="contrasttext">Contrast text:</label><br/>
            <Colorinput id="contrasttext" /><br/>
            <input type="submit" value="Add Color" />
        </form>
    );
}