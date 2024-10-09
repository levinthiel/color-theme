import { useState } from "react"

export default function Colorinput({id,defaultValue}) {
    const [inputValue, setInputValue] = useState(defaultValue);
    
    function handleInputValue(event) {
        setInputValue(event.target.value);
    }
    return (
        <>
            <input type="text" id={id} name="hex" value={inputValue} onChange={handleInputValue}/>
            <input type="color" value={inputValue} onChange={handleInputValue}/>
        </>
    )
}