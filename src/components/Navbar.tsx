import {NavLink, Outlet} from "react-router-dom";
import '../styles/Navbar.css';


const Navbar = () =>
    <main>
        <ul className={"navbar"}>
            <li><NavLink to={"/"} className={"navbar__listItem"}>Products</NavLink></li>
        </ul>
        <section>
            <Outlet />
        </section>
    </main>;


export default Navbar;