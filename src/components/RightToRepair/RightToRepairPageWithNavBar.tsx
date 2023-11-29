import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RightToRepairNavBar from "./RightToRepairNavBar";

interface Props {
  children: ReactNode;
}

function RightToRepairPageWithNavBar({ children }: Props) {
  return (
    <div>
      <RightToRepairNavBar />
      <div>{children}</div>
    </div>
  );
}

export default RightToRepairPageWithNavBar;
