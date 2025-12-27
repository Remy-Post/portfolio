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
            <footer className="bg-purple-400 h-[10vh] w-full ">
                <p className="text-center">© 2025 Remy Post. All rights reserved.</p>
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