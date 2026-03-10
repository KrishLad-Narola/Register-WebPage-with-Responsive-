import React from "react";
import footerContact from "../Api/FooterApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {

  const footerIcon = {
    MdPlace: <MdPlace size={22} />,
    IoCallSharp: <IoCallSharp size={22} />,
    TbMailPlus: <TbMailPlus size={22} />,
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">

      <div className="flex max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;

          return (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
            >
              <div className="text-indigo-400 text-2xl">
                {footerIcon[icon]}
              </div>

              <div>
                <p className="font-semibold text-white">{title}</p>
                <p className="text-sm text-gray-400">{details}</p>
              </div>
            </div>
          );
        })}

      </div>

      <div className="border-t border-gray-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <NavLink
            to="/"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            KrishCodes
          </NavLink>
        </p>

        <ul className="flex gap-6 text-sm">
          <li>
            <NavLink to="/" className="hover:text-white transition">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/" className="hover:text-white transition">
              Source Code
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="hover:text-white transition">
              Contact
            </NavLink>
          </li>
        </ul>

      </div>

    </footer>
  );
};

export default Footer;