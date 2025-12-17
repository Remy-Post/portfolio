import {useEffect, useState} from "react";
import Contact from "./Contact";

export default function Contacts(){
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/mockdata.json")
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
               return response.json()
            })
            .then((data) => {
                const Contacts = data?.contacts ?? [];
                console.log(Contacts);
                setLoading(false);
                setContacts(Contacts);
            })
            .catch((err) => {
                console.log("CRITICAL API ERROR: " +  err);
                setError(err.toString());
            });
    }, []); //innit

    return(
        <>
            <div className="text-center flex justify-center items-center h-[20vh]">
                <h1 className="text-3xl">Contacts</h1>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {loading !== true ? error !== null ? <p className="text-red-500 text-center my-10">{error}</p> : contacts.map((contact, index) => (
                    <Contact key={index} {...contact}/>
                )) : <p>Loading...</p>}
            </div>

        </>
    )
}