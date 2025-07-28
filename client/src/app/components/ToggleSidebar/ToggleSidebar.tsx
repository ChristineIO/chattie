import Menu from "../../icons/Menu"
import { useState } from "react"

type ToggleSidebarProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ToggleSidebar = ({onClick}:ToggleSidebarProps) => {
    
    return (
        <button onClick={onClick}>
            <Menu />
        </button>
    )
}

export default ToggleSidebar