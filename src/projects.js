/**
 * @file projects.js
 * @author Charles Kellogg
 * 
 * Display the list of projects
 */

import LinkBox from "./linkBox";

/**
 * Display projects
 * @returns The projects component
 */
function Projects() {
    return(
        <div>
            <div className="linkGridSpacer" />
            <h1 className="linkGridHead">Projects:</h1>
            <section className="linkGrid">
                <LinkBox name="Home Page" link="https://www.github.com/CharlesKellogg/CharlesKellogg.github.io/" />
                <LinkBox name="Snake" link="https://www.github.com/CharlesKellogg/Snake/" />
            </section>
        </div>
    );
}

export default Projects;
