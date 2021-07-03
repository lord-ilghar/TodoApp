import { FunctionComponent } from "react";

import Nav from "./navbar";

import navbarData from "./../data/navbar";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Nav title="navbar" data={navbarData} />
      {children}
    </>
  );
};

export default Layout;
