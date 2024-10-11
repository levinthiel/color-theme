import useLocalStorageState from 'use-local-storage-state'
import { uid } from 'uid';
import { useState } from "react";
import "./ThemeSwitch.css";

export default function ThemeSwitch({newColors}){
    const [themes, setThemes] = useLocalStorageState("themes", {defaultValue:[
        { id: 'default', name: 'Default Theme', colors: newColors, editable: false },
        { id: uid(), name: 'New Theme', colors: [], editable: true }
      ]});
      const [activeTheme, setActiveTheme] = useState(themes[0]);
      const [isRenaming,setIsrenaming] = useState(false)
      
      function plsRename(){
        setIsrenaming(true)
      }
      function plsCancel(){
        setIsrenaming(false)
      }
      function handleRename(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const newName = formData.get('themeName');
        setThemes(themes.map((theme) => theme.id === activeTheme.id ? {...theme, name: newName } : theme))
        setIsrenaming(false)
      }
    return(
        <section className='themeswitcher' >  
            <div>
                <p className='currentThemeName'>Current Theme: {activeTheme.name}</p>
                <select onChange={(event) => setActiveTheme(themes.find(t => t.id === event.target.value))}>
                    {themes.map(theme => (
                        <option key={theme.id} value={theme.id}>
                            {theme.name}
                        </option>
                    ))}
                </select>
            </div>
            <button>Add </button>
            {activeTheme.editable && (
                <>
                {isRenaming && (
                    <form className='renameForm' onSubmit={() =>handleRename(event)}>
                        <input type='text'  name="themeName" defaultValue={activeTheme.name}/>
                        <button type='submit'>Rename</button> 
                        <button  onClick={() =>plsCancel()}>Cancel</button> 
                    </form>
                       
                )}
                {!isRenaming && (
                    <>
                    <button onClick={() =>plsRename()}>Rename</button> 
                    <button>Delete</button>
                    </>
                )}
                </>
            )}
        </section>
    )
}