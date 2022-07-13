/**
 * @file linkBox.js
 * @author Charles Kellogg
 * 
 * Functional component for a box with a link
 */

import { useState } from "react";

/**
 * Create and return a LinkBox component.
 * Will change color when hovered over.
 * 
 * @param {*} props 
 * @returns LinkBox component
 */
function LinkBox(props) {
    const [hover, setHover] = useState(false);

    return(
        <a
            className={hover ? "linkBoxHover" : "linkBox"}
            href={props.link}
            target="_blank"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <h2 className="linkBoxText">{props.name}</h2>
        </a>
    );
}

export default LinkBox;
