import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { GoX } from "react-icons/go";

const Navbar = () => {

    const[open,setOpen]=useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home'},
        { id: 2, path: '/about', name: 'About Us'},
        { id: 3, path: '/services', name: 'Our Services'},
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '/profile/:userId', name: 'User Profile'}
      ];
      

    return (
        <nav>
            <div className="md:hidden bg-red-400" onClick={()=>setOpen(!open)}>
                {
                    open===true?<GoX className="text-3xl"></GoX>
                    :<HiMenuAlt1 className="text-3xl" ></HiMenuAlt1>
                }
            
            </div>
            <ul className={`md:flex  absolute md:static bg-green-300 duration-1000 
            ${open?'top-8':'-top-40'}
            px-6 shadow-lg`}>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;