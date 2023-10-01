import React from "react";
import NavBar from "./NavBar";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  children: ReactNode;
}

function PageWithNavBar({ children }: Props) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}

export default PageWithNavBar;
