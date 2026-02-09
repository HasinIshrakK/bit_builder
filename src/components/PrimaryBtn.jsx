import { Link } from "react-router";

const PrimaryBtn = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="px-5 py-3 md:py-3.5 bg-linear-to-r from-purple-500 to-fuchsia-500 text-white font-medium md:text-lg rounded-lg transition"
    >
      {text}
    </Link>
  );
};
export default PrimaryBtn;
