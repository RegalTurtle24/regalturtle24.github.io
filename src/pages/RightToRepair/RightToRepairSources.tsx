import React from "react";
import RightToRepairPageWithNavBar from "../../components/RightToRepair/RightToRepairPageWithNavBar";
import { Link } from "react-router-dom";

const RightToRepairSources = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(170, 170, 170, 1)",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <RightToRepairPageWithNavBar>
        <div style={{ padding: "1.5rem" }} />
        <div
          className="container-fluid rounded-4"
          style={{
            padding: "1rem",
            textAlign: "left",
            width: "90%",
            backgroundColor: "rgba(0, 47, 108, 0.3)",
          }}
        >
          <h2
            style={{
              paddingLeft: "1rem",
              fontFamily: "Courier New",
              fontWeight: "bold",
            }}
          >
            Sources:
          </h2>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link to={"www.repair.org/"} style={{ color: "rgb(0,0,0)" }}>
              repair.org
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://www.ncsl.org/technology-and-communication/right-to-repair-2023-legislation"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              NCSL 2023 Right to Repair Legislation
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={"https://en.wikipedia.org/wiki/Right_to_repair"}
              style={{ color: "rgb(0,0,0)" }}
            >
              Wikipedia Right to Repair
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://hbr.org/2023/01/research-the-unintended-consequences-of-right-to-repair-laws"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              HBR: "Research: The Unintended Consequences of Right-to-Repair
              Laws"
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://www.forbes.com/sites/gordonkelly/2021/10/02/apple-iphone-13-pro-max-repair-warning-higher-cost-iphone-12-pro-max-upgrade/?sh=67315b7e729a"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              Forbes: "Apple Latest iPhone Repair Crackdown Goes Too Far"
            </Link>
          </p>
        </div>
      </RightToRepairPageWithNavBar>
    </div>
  );
};

export default RightToRepairSources;
