import { useState } from "react"

export default function CopyColor({color}){
    const [isCopied, setisCopied]= useState(false)
    async function writeClipboardText(text) {
        try {
          await navigator.clipboard.writeText(text);
          console.log(text)
          setisCopied(true)
          setTimeout(() => { setisCopied(false); }, 3000)
        } catch (error) {
          console.error(error.message);
        }
      }

    
    return(
        <>
            <button onClick={() => writeClipboardText(color.hex)}>Copy</button> 
            <span className={isCopied ? "" : "hidden"}>Copied to clipboard!</span>
        </>
    )

}