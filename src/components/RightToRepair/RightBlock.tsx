import { ReactNode } from "react";

interface Props {
  myheader: ReactNode;
  mybody: ReactNode;
}

const RightBlock = ({ myheader, mybody }: Props) => {
  return (
    <div
      className="container-fluid rounded-start-4"
      style={{
        padding: "3rem",
        textAlign: "left",
        width: "75%",
        marginRight: "0rem",
        background:
          "linear-gradient(315deg, rgba(104, 125, 125, 0.8), rgba(125, 113, 104, 0.8), rgba(104, 125, 125, 0.8))",
      }}
    >
      <h1 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
        {myheader}
      </h1>
      <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
        {mybody}
      </h3>
    </div>
  );
};

export default RightBlock;
