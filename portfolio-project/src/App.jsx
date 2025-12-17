import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <>
        <div className="w-[90%] mx-auto border-amber-50 bg-white">
            <header className="grid grid-cols-[20%_80%] h-[10%] grid-rows-1 bg-gray-50 items-center">
                <h1 className="">Portfolio</h1>
                <nav className="-bg-linear-150 ml-10">
                     <menu className=" w-[60%] flex justify-between">
                         <NavItem to="/">Home</NavItem>
                         <NavItem to="/projects">Projects</NavItem>
                         <NavItem to="/contacts">Contact</NavItem>
                         <NavItem to="/contacts/github">GitHub</NavItem>
                     </menu>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="bg-purple-400 h-[10vh] ">
                <p className="text-center">© 2025 Remy Post. All rights reserved.</p>
            </footer>
        </div>
    </>
  )
}

export default App

function NavItem ({children, to}){
    return (
         <li className="hover:bg-blue-500 cursor-pointer">
             {to ? <Link to={to}>{children}</Link> : children}
         </li>
    )
}