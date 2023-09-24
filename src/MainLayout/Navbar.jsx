import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row md:justify-between shadow-md items-center py-5 px-8">
            <div>
                <img className=" w-44 ml-5" src="https://i.ibb.co/VCz4wSX/Logo.png" alt="" />
            </div>
            <div className="my-5 md:my-0">
                <ul className="flex items-center gap-10 text-lg font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;