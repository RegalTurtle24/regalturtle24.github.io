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
              The philosophy of the companies can be traced back to the idea of
              planned obsolescence, in which products are made not with the
              ideal of lasting a long time, but instead that people will
              purchase new things as time goes on, and that therefore the
              product does not have to last as long, or that the product should
              stop working after a certain amount of time. This is the
              foundational concept for denying the right to repair, as it turns
              out that planned obsolescence makes the companies who use it quite
              a lot of money. Because of the profits, tech companies continue to
              try different strategies to make sure that when your phone breaks,
              the best option is to go to them to either get it fixed, or throw
              it out and get the next big thing (which often times isn't
              actually that different than what you had).
            </p>

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
