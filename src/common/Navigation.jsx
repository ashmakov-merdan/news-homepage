import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function Navigation(){
    const [ toggle, setToggle ] = useState(false);
    
    return (
        <nav role={"navigation"}>
            <div className={"logo"}>
                <img src={logo} alt={"logo"}/>
            </div>
            <ul className={"navList"} style={{right: toggle && 0}}>
                <li className={"navItem"}>
                    <Link>Home</Link>
                </li>
                <li className={"navItem"}>
                    <Link>New</Link>
                </li>
                <li className={"navItem"}>
                    <Link>Popular</Link>
                </li>
                <li className={"navItem"}>
                    <Link>Trending</Link>
                </li>
                <li className={"navItem"}>
                    <Link>Categories</Link>
                </li>
            </ul>
            <button className={toggle ? "burger active" : "burger"} onClick={() => setToggle(!toggle)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}