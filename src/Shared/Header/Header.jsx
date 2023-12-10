import { Link, NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="navbar text-lg font-semibold py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-32">

                            <NavLink activeclassname="active" to={"/about"}>About</NavLink>
                            <NavLink activeclassname="active" to={"/portfolio"}>Portfolio</NavLink>
                            <NavLink activeclassname="active" to={"/contact"}>Contact</NavLink>

                        </div>
                    </div>
                    <div className="hidden lg:flex">
                        <Link to={"/"}>
                            <img className="w-16" src="https://i.ibb.co/k0mFjS3/9211049.png" alt="SJ" />
                        </Link>
                    </div>
                </div>

                <div className="navbar-center">
                    <div className="lg:flex gap-8 hidden">
                        <NavLink activeclassname="active" to={"/"}>Home</NavLink>
                        <NavLink activeclassname="active" to={"/about"}>About</NavLink>
                        <NavLink activeclassname="active" to={"/portfolio"}>Portfolio</NavLink>
                        <NavLink activeclassname="active" to={"/contact"}>Contact</NavLink>
                    </div>
                    <div className="lg:hidden ">
                        <Link to={"/"}>
                            <img className="w-12" src="https://i.ibb.co/k0mFjS3/9211049.png" alt="Social Event" />
                        </Link>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="flex gap-8">
                        <h2 className="flex gap-2 justify-center items-center text-lg"><IoCall /><span className="text-[#FEC544]"> +8801763-628770</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;