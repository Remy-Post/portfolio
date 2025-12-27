import { useEffect, useState } from "react";

export default function Index(){
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch("https://picsum.photos/600/400")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setImage(data))
            .catch(error => console.log(error));
    }, []);

    return(
        <>
          {/* Header */}
          <div className="w-full h-[30vh] bg-amber-50 grid grid-cols-[1fr_1fr] gap-4">
            <div className="w-[90%] mx-auto self-center flex flex-col text-end">
                <h1 className="text-2xl">Hi, I'm <span className="font-bold">Remy Post</span></h1>
                <h3 className="my-1">A <span className="underline underline-offset-1">Computer Science Student</span>, passionate in <i>Front-End Web Development</i></h3> {/*Switch Thingy*/}
            </div>
              {image != null ? <img src={image} alt="Just an image of myself" /> : <p className="text-center self-center"><strong>Loading...</strong></p>}
          </div>
            <div className="flex flex-col gap-4 h-auto py-10 justify-evenly text-left w-[80%] mx-auto">
                <TextHolder>
                    I am currently a second-year student concurrently pursuing an Honours Bachelor of Science in Computer Science at Lakehead University and a Computer Programmer diploma at Georgian College.
                </TextHolder>
                <TextHolder>
                    My technical expertise lies in building scalable, user-friendly full-stack applications. I specialize in the React ecosystem (including Next.js and Redux), Python automation, and ASP.NET Core.
                </TextHolder>
                <TextHolder>
                    Beyond the screen, I value leadership and community building. I've honed my communication and organizational skills serving as VP of Communications for the Georgian College Residence Student Council and as a Camp Counsellor.
                </TextHolder>
                <TextHolder>
                    When I'm not coding, you can find me analyzing movies, strategizing over board games, or relaxing with video games.
                </TextHolder>
            </div>
        </>
    )
}

function TextHolder({children}){
    return(
        <p className="my-3 rounded p-2 hover:bg-gray-200">{children}</p>
    )
}