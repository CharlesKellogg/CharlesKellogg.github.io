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
 * Each LinkBox can accept a name (text to display),
 * an id (id to pass as a prop), and a link (href)
 * 
 * @param {*} props 
 * @returns LinkBox component
 */
function LinkBox(props) {
    const [hover, setHover] = useState(false);

    return(
        <a
            // Change class name and id based on whether the mouse is over this component
            className={hover ? "linkBoxHover" : "linkBox"}
            id={hover ? props.id + "Hover" : props.id}

            // Set link
            href={props.link}
            target="_blank"

            // Set hover conditions
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <h2 className="linkBoxText">{props.name}</h2>
        </a>
    );
}

export default LinkBox;
