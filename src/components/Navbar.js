import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-around p-[1.5%]">
        {/* Brand Logo */}
        <div>
          <img src={Logo} alt={"logo"} width={120} height={100} />
        </div>

        {/* Menu Items and Search Icon */}
        <div className="flex-row justify-between items-center w-[50%] text-sm hidden lg:flex">
          {[
            "FALCON 9",
            "FALCON HEAVY",
            "DRAGON",
            "STARSHIP",
            "HUMAN SPACEFLIGHT",
            "RIDESHARE",
            "STARSSHIELD",
            "STARLINK",
          ].map((menuItem, index) => (
            <h1
              className="font-normal peer  underline-offset-4 decoration-4 cursor-pointer"
              key={index}
            >
              {menuItem}
              <div className="hidden peer-hover:block bg-gradient-to-r from-pink-500 to-purple-500 leading-[2px]">
                &nbsp;
              </div>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
