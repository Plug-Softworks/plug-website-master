import React, {useState} from "react";

export const ModalCtx = React.createContext();

export const ModalCtxProvider = ({children}) => {
    const [modal, setModal] = useState({
        openStatus: false,
        data: null
    })

    return (
        <ModalCtx.Provider value={[modal, setModal]} >
            {children}
        </ModalCtx.Provider>
    )
}