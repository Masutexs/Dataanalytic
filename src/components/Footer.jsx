import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { Logowhite } from "../assets";
import { footer } from "./data";

const Footer = () => {
  return (
    <div className="w-full mx-auto py-16 px-10 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="">
        <a href="/">
          <img
            src={Logowhite}
            alt="Logowhite"
            className="w-[50%] h-[35%] object-cover"
          />
        </a>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          perferendis suscipit cupiditate porro itaque animi blanditiis
          consequatur iste.
        </p>
        <div className="flex md:w-[70%] cursor-pointer justify-evenly align-middle my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 text-center align-middle cursor-pointer flex flex-col justify-evenly">
        {footer.map(({title, points}) => (
          <div>
            <h6 className="font-meduim text-gray-400 ">{title}</h6>
            <ul className="font-bold">
              <li className="py-2 text-sm">{points}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
