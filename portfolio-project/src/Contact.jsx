//Helper function used to return a 'contact element'
export default function Contact({children, ...params}){
    return(
        <div className="">
            <h2>{params.name}</h2>
            <p>
                <a className="text-blue-500 hover:underline hover:text-blue-800" href={`${params.link}`}>{params.link}</a>
            </p>
            <p>{params.phone}</p>
            {children}
        </div>
    )
}