import { useState ,useEffect } from "react";

export const useOutsideCLick = (el, initialState) => {
    const [isActive, setisActive] = useState (initialState)
    

    useEffect(() => {
        // Essa função serve para verificar se depois que o botão for clicado
        // deve setar como ativo
        const onClick = e => {
            if(el.current !== null && !el.current.contains(e.target)){
                setisActive(!isActive);
            }
        }

        if(isActive){
            window.addEventListener('click',onClick)
        }

        return () => {
            window.removeEventListener('click', onClick)
        }
    },[isActive, el])

    return [isActive, setisActive];
}