export default function Index(){
    return(
        <>
          {/* Header */}
          <div className="w-full h-[30vh] bg-amber-50 grid grid-cols-[40%_60%]">
            <div className="flex flex-col justify-center">
                <h1 className="">Hi, I'm Remy Post</h1>
                <h3 className="">A Computer Science Student passionate in Web Development</h3>
            </div>
          </div>

           <div className="w-full h-[50vh] bg-amber-200 grid grid-rows-[30%_70%]">
               <h3 className="text-2xl text-center self-center">
                   Who am I?
               </h3>
               <p>
                   I'm an software developper focused on creating scalable and user-friendly web applications.
               </p>
               <p>
                   I'm an software developper focused on creating web applications that are both visually appealing and easy to use.
               </p>
               <p>
                   Also, I'm one who likes to watch movies and play board games
               </p>
           </div>

           <div className="w-full h-[30vh] bg-amber-400">

           </div>
        </>
    )
}