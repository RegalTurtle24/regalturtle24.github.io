import React from "react";
import RightToRepairPageWithNavBar from "../../components/RightToRepair/RightToRepairPageWithNavBar";

const RightToRepairHistory = () => {
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
              History
            </h1>
            <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Take a look at the history of the Right to Repair movement.
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
              In 2021, Apple announced the iPhone 13. With this new release,
              they also continued on their path to ensure that no third party
              vendor would be able to repair an Apple phone. With the iPhone 13,
              once a screen has been replaced by a third party vendor, the Face
              ID is disabled. This came after Apple had previously made attempts
              at preventing the repair of their phones. While this change does
              not prevent the repair of apple phones, it is exactly what the
              right to repair movement is trying to prevent, and why they are so
              adamant about independant repair organizations having the same
              tools as the companies themselves, as well as devices not
              intentionally changing in functionality after a repair is
              conducted.
            </p>
          </div>
        </div>
      </RightToRepairPageWithNavBar>
    </div>
  );
};

export default RightToRepairHistory;
