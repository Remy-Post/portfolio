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
                <h3 className="my-1">A Computer Science Student passionate in Web Development</h3>
            </div>
              {image != null ? <img src={image} alt="Just an image of myself" /> : <p className="text-center self-center"><strong>Loading...</strong></p>}
          </div>
           <div className="flex flex-col gap-4  h-[50vh] justify-evenly text-center">
               <TextHolder>
                   I'm an software developper focused on creating scalable and user-friendly web applications.
               </TextHolder>
               <TextHolder>
                   I'm an software developper focused on creating web applications that are both visually appealing and easy to use.
               </TextHolder>
               <TextHolder>
                   Also, I'm one who likes to watch movies and play board games
               </TextHolder>
               <TextHolder>
                   I'm also a big fan of video games and I enjoy playing them in my free time.
               </TextHolder>
           </div>
           <div className="w-full h-[30vh] bg-amber-400">

           </div>
        </>
    )
}

function TextHolder({children}){
    return(
        <p className="">{children}</p>
    )
}