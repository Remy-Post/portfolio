import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <>
        <div className="w-[90%] mx-auto border-amber-50 bg-white">
            <header className="flex justify-between h-[10%] py-4 bg-gray-50 items-center">
                <nav className="mx-auto">
                     <menu className="flex justify-between gap-5">
                         <NavItem>Home</NavItem>
                         <NavItem to="/projects">Projects</NavItem>
                         <NavItem to="/github">GitHub</NavItem>
                     </menu>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="bg-purple-400 h-[10vh] w-full py-4 flex justify-between">
                <h5 className="ml-10 text-xl font-bold">Remy Post</h5>
                <div className="flex justify-evenly items-center w-[20vw]"> {/* Social Media Icons */}
                    <a href="Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <img src="Document.svg" alt="GitHub Icon" className="w-10 h-10" />
                    </a>
                    <span className="text-4xl my-3 font-bold ">-</span>
                    <a href="https://github.com/remy-post" target="_blank" rel="noopener noreferrer">
                        <img src="github_Icon.png" alt="GitHub Icon" className="w-10 h-10" />
                    </a>
                    <a href="mailto:remy.post.06@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="Gmail_Icon.svg" alt="GitHub Icon" className="w-10 h-10" />
                    </a>
                    <a href="tel:9053920623" target="_blank" rel="noopener noreferrer">
                        <img src="phone.svg" alt="GitHub Icon" className="w-10 h-10" />
                    </a>
                </div>
            </footer>
        </div>
    </>
  )
}

export default App

function NavItem ({children, to = "/"}){
    return (
         <li className="cursor-pointer">
             {to ? <Link to={to} className="p-2 hover:bg-gray-500 hover:underline rounded-lg underline underline-offset-2">{children}</Link> : children}
         </li>
    )
}