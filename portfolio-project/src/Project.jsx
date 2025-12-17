//Helper used to return a 'project element'
export default function Project({children, ...params}){
    return(
        <>
        {params.id === undefined ?
            //True
            <div {...params} className="w-full h-[20vh] bg-amber-50">
                {params.name ? <h2 className="text-center text-2xl">{params.name}</h2> : <p>No name</p>}
                {params.shortDescription ? <p className="text-center">{params.shortDescription}</p> : <p>No short description</p>}
                {params.description ? <p className="text-center">{params.description}</p> : <p>No description</p>}
                {params.techStack ? <p className="text-center">
                        {params.techStack.map((tech, index) => (
                            <TechStack key={index} tech={tech} />
                        ))}
                </p> : <p>No tech stack</p>}
                {params.githubLink && <p className="text-center"><a href={params.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>}
                {params.hostingLink && <p className="text-center"><a href={params.hostingLink} target="_blank" rel="noopener noreferrer">Hosting</a></p>}
            </div>
            :
            //False
            <div {...params} className="w-full text-red-600 font-bold text-center my-12">
                <p className="text-4xl">Error</p>
            </div>
        }
            {children}
        </>
    )
}

function TechStack({tech}){
    return(
        <div className="">{tech}</div>
    )
}