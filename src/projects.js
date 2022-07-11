/**
 * @file projects.js
 * @author Charles Kellogg
 * 
 * Display the list of projects
 */

import { useState } from "react";

/**
 * Display projects
 * @returns The projects component
 */
function Projects() {
    return(
        <div>
            <div id="projSpacer" />
            <h1 id="projHead">Projects:</h1>
            <section className="projects">
                <Project link="CharlesKellogg.github.io" name="Home Page" />
                <Project link="Snake" name="Snake" />
            </section>
        </div>
    );
}

function Project(props) {
    const [hover, setHover] = useState(false);

    return(
        <a
            className={hover ? "projHover" : "project"}
            href={"https://www.github.com/CharlesKellogg/" + props.link}
            target="_blank"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <h2 className="projText">{props.name}</h2>
        </a>
    );
}

export default Projects;
