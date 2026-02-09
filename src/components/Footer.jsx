import { Facebook, Github, Linkedin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-linear-to-tr from-purple-900/30 via-fuchsia-800/20 to-black opacity-60 blur-3xl" />

      <div className="relative max-w-7xl mx-auto lg:px-0 px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Project Info */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-blue-500 uppercase mb-4 md:mb-6">
            Bit builder
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            A collaborative AI-powered team portfolio showcasing members,
            projects, skills, and real-world teamwork.
          </p>
        </div>
        {/* Tech Stack */}
        <div>
          <h3 className="text-white font-semibold mb-4 md:mb-8 md:text-xl">
            Tech Stack
          </h3>
          <ul className="space-y-3.5 md:space-y-6 text-sm font-medium">
            <li className="hover:text-purple-400 transition">
              React / Next.js
            </li>
            <li className="hover:text-purple-400 transition">Tailwind CSS</li>
            <li className="hover:text-purple-400 transition">Node & Express</li>
            <li className="hover:text-purple-400 transition">MongoDB</li>
            <li className="hover:text-purple-400 transition">REST APIs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 md:mb-8 md:text-xl">
            Useful Links
          </h3>
          <ul className="space-y-3.5 md:space-y-6 text-sm font-medium">
            {["Home", "Members", "Projects", "Skills", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={"/"}
                    className="hover:text-purple-400 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 md:mb-8 md:text-xl">
            Contact
          </h3>
          {/* Social links */}
          <div className="flex gap-3 flex-wrap mb-8">
            <Link to={"/"} className="bg-white/10 p-2.5 rounded-md">
              <Facebook size={20} />
            </Link>
            <Link to={"/"} className="bg-white/10 p-2.5 rounded-md">
              <Linkedin size={20} />
            </Link>
            <Link to={"/"} className="bg-white/10 p-2.5 rounded-md">
              <Github size={20} />
            </Link>
          </div>
          <ul className="space-y-3.5 md:space-y-6 text-sm">
            <li>Email: team@portfolio.dev</li>
            <li>Discord: Team Workspace</li>
            <li>GitHub: team-portfolio</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-purple-900/40 py-5 md:py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Team Portfolio · Built with 💜 & teamwork
      </div>
    </footer>
  );
};

export default Footer;
