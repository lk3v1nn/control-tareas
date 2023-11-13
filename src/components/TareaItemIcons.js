import '../style/TareaItemIconos.css'

import React from "react";

import { ReactComponent as CheckSVG } from "../icons/check.svg";
import { ReactComponent as DeleteSVG } from "../icons/delete.svg";

const IconsTypes = {
    Check: (color) =>  <CheckSVG className='icon-svg' fill={color}/>,
    Delete: (color) => <DeleteSVG className='icon-svg' fill={color}/>,
};

function TareaItemIcon({ type, color }) {
    return <span className={`icon ${type}`}>{IconsTypes[type](color)}</span>;
}

export { TareaItemIcon };
