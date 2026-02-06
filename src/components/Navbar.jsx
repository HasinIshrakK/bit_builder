import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const leftLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
  ];
  const rightLinks = [
    { name: "Members", path: "/members" },
    { name: "Contact", path: "/contact" },
    { name: "GitHub", path: "/gitHub" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1C072E] border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Logo */}
        <div className="md:hidden text-white text-2xl font-bold">
          <span className="text-purple-400 uppercase">Bit builder</span>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center justify-center gap-12">
          {/* Left Links */}
          <nav className="flex items-center justify-center gap-10">
            {leftLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm transition ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-200 hover:text-purple-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-4 w-full h-0.5 bg-purple-400"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Link
              to={"/"}
              className="flex items-center justify-center rounded-full mt-6 text-purple-400 font-bold text-2xl lg:text-3xl bg-linear-to-r from-purple-400 to-fuchsia-500 bg-clip-text  mb-4 md:mb-6 uppercase"
            >
              Bit builder
            </Link>
          </div>

          {/* Right Links */}
          <nav className="flex gap-10">
            {rightLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm transition ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-200 hover:text-purple-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-4 w-full h-0.5 bg-purple-400"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1C072E]  border-t border-purple-900/40">
          <nav className="flex flex-col px-8 py-12 space-y-8 text-center">
            {[...leftLinks, ...rightLinks].map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-md transition ${
                    isActive
                      ? "text-purple-400 font-medium"
                      : "text-gray-300 hover:text-purple-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
