import React from 'react'
import projectInfo from './info'
import ProjectCard from './ProjectCard'

function Projects(type) {

    const gridColSettings = [
        {gridColStart: 1, gridColEnd: 2, gridRowStart:1, gridRowEnd:1}, {gridColStart: 2, gridCallEnd: 3, gridRowStart:1, gridRowEnd:1},{gridColStart:}]

    const projectCardCollection = projectInfo.map((project, i) => <ProjectCard key={i}{...project} {...type}  />)

    return (
        <>
            {projectCardCollection}
        </>
    )
    
}

export default Projects
