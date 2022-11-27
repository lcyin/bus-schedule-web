import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>News</h1>
      <p className={headerStyles.description}>Hello From Header</p>
    </div>
  );
};

export default Header;
