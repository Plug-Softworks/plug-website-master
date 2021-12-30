import React, {createContext, useState, useContext} from "react";

export const MenuCtx = createContext();

export const MenuCtxProvider = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <MenuCtx.Provider value={[menuOpen, setMenuOpen]} >
            {children}
        </MenuCtx.Provider>
    )
}
