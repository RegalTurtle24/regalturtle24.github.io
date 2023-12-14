import React from "react";
import RightToRepairPageWithNavBar from "../../components/RightToRepair/RightToRepairPageWithNavBar";

const RightToRepairInternational = () => {
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
              International Action
            </h1>
            <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Although we are most affected by American laws and changes,
              international laws have sweeping effects, showing the power of
              convenience for these companies.
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
              For a while, the US has been leading the way with Right to Repair,
              as we were the ones with Ford and the early tech giants like IBM
              who needed to have laws passed to keep in check. However, recently{" "}
              <a
                href="https://www.bbc.com/news/technology-57744091"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                Europe has also started to pass bills.
              </a>{" "}
              Most are similar to the bills that America is trying to pass, but
              certain groups like the EU hold a lot more weight than individual
              states, as they are able to effectively pass bills that effect a
              huge market for the big tech companies.
            </p>

            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              One of the largest laws that has been passed for the Right to
              Repair movement in recent times was{" "}
              <a
                href="https://nypost.com/2023/06/15/amazon-shuts-down-customers-smart-home-devices-over-false-racist-claim/"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                the EU making USB-C the standard charger
              </a>{" "}
              for the EU. By doing this, they forced Apple, one of the biggest
              antagonists of Right to Repair, to adopt USB-C as their charging
              cable. While this may seem miniscule, it actually has a large
              impact on the e-waste produced by cell phones. It also set a
              precedant: big blocs like the EU can create actual change, and
              it's not an impossible battle.
            </p>
          </div>
        </div>
      </RightToRepairPageWithNavBar>
    </div>
  );
};

export default RightToRepairInternational;
