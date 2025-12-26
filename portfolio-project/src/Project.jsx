//Helper used to return a 'project element'
export default function Project({children, ...params}){
    const colors = {
        gray: "text-gray-700",
        yellow: "text-amber-300",
        blue: "text-cyan-400",
        red: "text-red-600",
        orange: "text-orange-400",
        main: "text-black"

    }
    return(
        <div className="">
            {/*Header*/}
            <div className="grid grid-cols-3">
                <div className="w-20 flex justify-evenly mx-auto">
                    <div className="bg-blue-500 w-[3vh] h-[3vh] rounded-4xl"></div>
                    <div className="bg-red-600 w-[3vh] h-[3vh] rounded-4xl"></div>
                    <div className="bg-amber-300 w-[3vh] h-[3vh] rounded-4xl"></div>
                </div>
                <h3 className="text-2xl font-bold text-center self-center">{params.name}</h3>
                {/*Icon*/}
                <div>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                         aria-hidden="true" className="h-7 w-7 self-end hover:cursor" height="1em" width="1em"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                              clip-rule="evenodd"></path>
                        <path fill-rule="evenodd"
                              d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                              clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            {/*Body*/}
            <br className="bg-blue-500"/>
            <div>
                <div> {/* Name*/}
                    <span className={colors.main}>type:</span>
                    <span className={colors.gray}> '</span>
                    <span className={colors.blue}>{params.type}</span>
                    <span className={colors.yellow}>{params.name}</span>
                    <span className={colors.gray}>'</span>
                </div>
                <div> {/* Tech Stack */}
                    <span className={colors.main}>Tools: </span>
                    <span className={colors.gray}>[</span>
                    <span className={colors.gray}>'</span>
                    {
                        params.techStack.map((t, index) => (
                            <span key={index}>
                                <span key={index} className={colors.main}>{t}</span>
                                <span className={colors.gray}>'</span>
                            </span>
                        ))
                    }
                    <span className={colors.gray}>]</span>
                </div>
                <div> {/*Role*/}
                    <span className={colors.main}>myRole: </span>
                    <span className={colors.orange}>{params.role}</span>
                </div>
            </div>
            {/*Footer*/}
            <div>

            </div>
        </div>
    )
}
