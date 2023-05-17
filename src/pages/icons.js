import React from "react";
// Link to find more icons https://react-icons.github.io/react-icons/icons?name=ai
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as CgIcons from "react-icons/cg";

export const iconsData = [
  {
    title: "E-mail",
    path: "/",
    icon: <AiIcons.AiFillMail />,
    cName: "nav-text",
  },
  {
    title: "Password",
    path: "/password",
    icon: <RiIcons.RiLockPasswordLine />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
];
