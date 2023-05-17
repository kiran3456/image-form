import React, { useState } from "react";
import "./Form.css";
import { iconsData } from "./icons.js";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as CgIcons from "react-icons/cg";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [first, setfirst] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };

  return (
    <div className="main">
      <h2>
        <CgIcons.CgProfile size={25} /> Sign Into Account
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">
            <AiIcons.AiFillMail size={25} />
          </label>
          <input
            className="email-input"
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">
            <RiIcons.RiLockPasswordLine size={25} />
          </label>

          <input
            className="password-input"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button className="button" type="submit">
          <input
            className="checkbox"
            type="checkbox"
            value={first}
            onChange={(e) => setfirst(e.target.value)}
          />
          Keep Me Logged In
        </button>
      </form>

      <button className="link-btn">Go!</button>
      <button className="end-btn">Forget Password</button>
    </div>
  );
};
