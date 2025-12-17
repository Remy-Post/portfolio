import {useEffect, useState} from "react";
import Project from "./Project";

export default function Projects(){
    const [projectList, setProjectList] = useState(null);

    useEffect(() => {
        fetch("/mockdata.json")
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            const projects = data?.projects ?? [];
            console.log(projects);
            setProjectList(projects);
        })
        .catch(error => console.log("CRITICAL API ERROR: " +  error))
    }, []);

    return (
        <>
            <h1 className="text-3xl text-center my-10">My Projects</h1>
            <div className="">
                {projectList === null ?
                    //Empty MOCK data / Before it loads
                    <p>Loading...</p> :
                    projectList.map((project, index) => (
                    <Project key={project?.id ?? index} {...project} />
                ))}
            </div>
        </>
    )
}