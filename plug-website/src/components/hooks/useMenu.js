import React, {useContext} from "react";
import { MenuCtx } from "../contexts/MenuCtx";

export function useMenu() {
    const [openMenu, setOpenMenu] = useContext(MenuCtx);

    function changeMenuStatus(){
        if (openMenu === true){
            setOpenMenu(false);
            return false
        } else {
            setOpenMenu(true);
            return true
        }
    }


    return {openMenu, changeMenuStatus};
}