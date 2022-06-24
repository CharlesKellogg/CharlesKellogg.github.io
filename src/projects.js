/**
 * @file projects.js
 * @author Charles Kellogg
 * 
 * Display the list of projects
 */

/**
 * Display projects
 * @returns The projects component
 */
function Projects() {
    return(
        <div className="projects">
            <h1 id="projHead">
                Projects:
            </h1>
            <ul>
                <a
                    className="project"
                    href="https://www.github.com/CharlesKellogg/Snake/"
                    target="_blank"
                >
                    <h2>Snake</h2>
                </a>
            </ul>
        </div>
    );
}

export default Projects;
