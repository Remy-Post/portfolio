import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <>
        <div className="w-[90%] mx-auto border-amber-50 bg-white">
            <header className="flex justify-between h-[10%] py-4 grid-rows-1 bg-gray-50 items-center">
                <h1 className="text-3xl">Portfolio</h1>
                <nav className="-bg-linear-150 ml-10">
                     <menu className=" w-[50vw] text-xl flex justify-between mx-1">
                         <NavItem to="/" >Home</NavItem>
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
         <li className="cursor-pointer">
             {to ? <Link to={to} className="p-2 hover:bg-gray-500 hover:underline rounded-lg">{children}</Link> : children}
         </li>
    )
}