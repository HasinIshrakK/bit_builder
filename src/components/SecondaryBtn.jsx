import { Link } from "react-router";

const SecondaryBtn = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="px-5 py-3 md:py-3.5 border border-fuchsia-200 text-white font-medium md:text-lg rounded-lg transition"
    >
      {text}
    </Link>
  );
};
export default SecondaryBtn;
