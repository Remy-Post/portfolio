import {useEffect, useState} from "react";
import Project from "./Project";

export default function Projects(){
    const [projectList, setProjectList] = useState(null);
    const [error, setError] = useState(null);

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
        .catch(err => {
            console.log("CRITICAL API ERROR: " +  err);
            setError(err.toString());
        })
    }, []);

    if (error) {
        return <div className="text-red-500 text-center my-10">Error loading projects: {error}</div>;
    }

    return (
        <>
            <h1 className="text-3xl text-center my-10">My Projects</h1>
            <div className="flex flex-col gap-4">
                {projectList === null ?
                    //Empty MOCK data / Before it loads
                    <p>Loading...</p> :
                    projectList.map((project, index) => (
                        <div className="w-[60%] mx-auto bg-gray-200 m-3 p-5 rounded-2xl hover:bg-gray-600">
                            <Project key={project?.id ?? index} {...project}/>
                        </div>
                ))}
            </div>
        </>
    )
}