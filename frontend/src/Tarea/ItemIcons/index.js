import "./itemIconos.css";

import React from "react";

import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import { ReactComponent as EditSVG } from "./edit.svg";

const IconsTypes = {
    Check: (color) => <CheckSVG className="icon-svg" fill={color} />,
    Delete: (color) => <DeleteSVG className="icon-svg" fill={color} />,
    Edit:(color) => <EditSVG className='icon-svg' fill={color} />
};

function TareaItemIcon({ type, color, completada, onFuncion}) {
    return (
        <span className={`icon ${type} CheckIcon--activo`}
        onClick={()=>onFuncion()}
        >
            {IconsTypes[type](completada ? "#00d1ce" : color)}
        </span>
    );
}

export { TareaItemIcon };
