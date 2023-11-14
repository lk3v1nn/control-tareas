import "../style/TareaItemIconos.css";

import React from "react";

import { ReactComponent as CheckSVG } from "../icons/check.svg";
import { ReactComponent as DeleteSVG } from "../icons/delete.svg";

const IconsTypes = {
    Check: (color) => <CheckSVG className="icon-svg" fill={color} />,
    Delete: (color) => <DeleteSVG className="icon-svg" fill={color} />,
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
