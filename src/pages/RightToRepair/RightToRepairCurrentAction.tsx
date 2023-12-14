import React from "react";
import RightToRepairPageWithNavBar from "../../components/RightToRepair/RightToRepairPageWithNavBar";

const RightToRepairCurrentAction = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(170, 170, 170, 1)",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <RightToRepairPageWithNavBar>
        <div
          className="container-fluid"
          style={{
            paddingTop: "3rem",
            paddingBottom: "1rem",
            paddingLeft: "0rem",
            paddingRight: "0rem",
          }}
        >
          <div
            className="container-fluid rounded-4"
            style={{
              padding: "3rem",
              textAlign: "center",
              width: "75%",
              background:
                "linear-gradient(315deg, rgba(104, 125, 125, 0.8), rgba(125, 113, 104, 0.8), rgba(104, 125, 125, 0.8))",
            }}
          >
            <h1
              style={{
                fontFamily: "Courier New",
                fontWeight: "bold",
              }}
            >
              Current Action
            </h1>
            <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Look at what the Right to Repair movement working on changing at
              the moment.
            </h3>
          </div>

          <div style={{ padding: "1rem" }} />

          <div
            className="container-fluid rounded-4"
            style={{
              padding: "1rem",
              paddingBottom: "0.1rem",
              textAlign: "left",
              width: "90%",
              backgroundColor: "rgba(0, 47, 108, 0.3)",
            }}
          >
            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              Currently, there are{" "}
              <a
                href="https://www.ncsl.org/technology-and-communication/right-to-repair-2023-legislation"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                47 different bills
              </a>{" "}
              related to right to repair pending in various states. Out of 55
              states and territories, only 18 of them currently do not have some
              kind of law proposed in 2023.
            </p>

            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              In New Jersey, bill{" "}
              <a
                href="https://custom.statenet.com/public/resources.cgi?id=ID:bill:NJ2022000A1538&cuiq=37d6e53d-38b7-5884-91fc-fe24c5a47af0&client_md=d70237e3295dacf4d69faa268a8b2f83&mode=current_text"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                A 1538
              </a>{" "}
              (the "Fair Repair Act") is a right to repair bill aimed at giving
              repair shops all repair and diagnostic tools companies have at
              their disposal, as well as forcing companies to share their repair
              documentation. If passed, this will create a much larger area for
              the repair industry to be able to provide services that otherwise
              would be available only from the companies that sell the product.
            </p>

            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              In Washington state, bill{" "}
              <a
                href="https://custom.statenet.com/public/resources.cgi?id=ID:bill:WA2023000H1392&cuiq=37d6e53d-38b7-5884-91fc-fe24c5a47af0&client_md=66c04e85f15d23c23508d118c1f53270&mode=current_text"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                H 1392
              </a>
              /
              <a
                href="https://custom.statenet.com/public/resources.cgi?id=ID:bill:WA2023000S5464&cuiq=37d6e53d-38b7-5884-91fc-fe24c5a47af0&client_md=8612971cf75d0ca942d5c7d97ac61d0f&mode=current_text"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                S 5464
              </a>{" "}
              also attempts to give independant companies access to the tools
              larger companies have to diagnose and fix problems on their
              devices. There is also an emphasis on making sure companies don't
              have to give away trade secrets, as well as an emphasis on making
              sure that features of the product aren't lost in the act of
              repairing a device.
            </p>
          </div>
        </div>
      </RightToRepairPageWithNavBar>
    </div>
  );
};

export default RightToRepairCurrentAction;
