import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar({ dogs }) {
    return (
        <nav className="NavBar">
            <NavLink className="NavBar-link" to="/dogs" end>Home</NavLink>
            { dogs.map((dog, index) => (
                <NavLink className="NavBar-link" key={ index } to={ `/dogs/${dog.name}` }>{ dog.name }</NavLink>
            )) }
        </nav>
    );
};

export default NavBar;