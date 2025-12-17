//Helper used to return a 'project element'
export default function Project({children, ...params}){
    return(
        <>
        {params.id !== undefined ?
            //True
            <div {...params} className="w-full my-6 py-1 rounded-lg bg-amber-50">
                {params.name ? <h2 className="text-center text-2xl">{params.name}</h2> : <p>No name</p>}
                {params.shortDescription ? <p className="text-center w-[95%] mx-auto">{params.shortDescription}</p> : <p>No Description</p>}
                {params.techStack && <p className="text-center">
                    <div className="rounded-2xl flex justify-evenly my-1 items-center">
                        {params.techStack.map((tech, index) => <TechStack key={index} tech={tech} />)}
                    </div>
                </p>}
                <div className="flex justify-between">
                    {params.githubLink && <p className="mx-1 my-1 hover:underline text-blue-600"><a href={params.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>}
                    {params.hostingLink && <p className="mx-1 my-1 hover:underline text-blue-600"><a href={params.hostingLink} target="_blank" rel="noopener noreferrer">Hosting</a></p>}
                </div>
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
    const techColor = {
        "JavaFX": "bg-orange-200 text-orange-800",
        "Java": "bg-orange-500 text-white",
        "MVC Arcutectures": "bg-gray-400 text-white",
        "Git": "bg-red-500 text-white",
        "GitHub": "bg-gray-800 text-white",
        "ReactJS": "bg-blue-400 text-white",
        "React": "bg-blue-400 text-white",
        "Redux-Toolkit": "bg-purple-500 text-white",
        "React-Redux": "bg-purple-600 text-white",
        "React Router (Dom)": "bg-red-400 text-white",
        "React Router": "bg-red-400 text-white",
        "Tail wind": "bg-teal-400 text-white",
        "Tailwind": "bg-teal-400 text-white",
        "C#": "bg-green-600 text-white",
        "MVC razor pages": "bg-green-700 text-white",
        "Stripe": "bg-indigo-500 text-white",
        "Google OAuth": "bg-blue-500 text-white",
        "Github OAuth": "bg-gray-700 text-white",
        "Discord OAuth": "bg-indigo-400 text-white",
        "CRUD Operations": "bg-emerald-500 text-white",
        "Bootstrap": "bg-purple-700 text-white",
        "C++": "bg-blue-700 text-white",
        "JavaScript": "bg-yellow-400 text-black",
        "TypeScript": "bg-blue-600 text-white",
        "MySQL": "bg-orange-300 text-black",
        "PHP": "bg-indigo-300 text-black",
        "HTML": "bg-orange-600 text-white",
        "CSS": "bg-blue-500 text-white",
        "Python": "bg-yellow-300 text-blue-800",
        "Arduino (C++)": "bg-teal-600 text-white"
    };

    return(
        <div className={techColor[tech] + " rounded-2xl px-3 py-1 text-sm font-semibold mx-1"}>{tech}</div>
    )
}
