import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const nav = [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "About",
            to: "/about",
        },
        {
            name: "Features",
            to: "/features",
        },
        {
            name: "Login",
            to: "/login",
        },
    ]
    return <>
        <div className="flex justify-between items-center font-sans  bg-[#EDF2F4]">
            <Link to='/' className="text-2xl m-2"> WhatsAmail</Link >
            <div>
                {
                    nav.map(item => (
                        <NavLink key={item.name}
                            to={item.to}
                            className="pb-1 text-lg m-2 hover:"
                            style={({ isActive }) => (isActive ? { borderBottom: "2px solid black" } : {})}
                        >
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    </>
}
export default Navbar;