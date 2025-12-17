export default function Projects(){
    const projectList = [
        {

        },
        {

        }
    ]

    return (
        <>
            <h1 className="text-3xl text-center my-10">My Projects</h1>
            <div className="">
                {projectList.map((project, index) => (
                    <div key={index}>{project.name}</div>
                ))}
            </div>
        </>
    )
}