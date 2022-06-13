import GetIcon from "../lib/GetIcon";
import { config } from "../config";
import * as React from "react";

export default function Icon(props) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: `${GetIcon(props.icon).svg}` }}
            className="w-[30px] h-[30px] hover:scale-[1.15]  duration-300 ease-in-out"
            style={{ fill: `${config.iconColor}` }}
        ></div>
    );
}
