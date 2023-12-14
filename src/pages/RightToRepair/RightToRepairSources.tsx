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

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://www.nytimes.com/wirecutter/blog/what-is-right-to-repair/"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              New York Times: What is Right to Repair?
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://nypost.com/2023/06/15/amazon-shuts-down-customers-smart-home-devices-over-false-racist-claim/"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              New York Post: "Amazon Shuts Down Customers Smart Home Devices
              Over False Racist Claim"
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://answers.microsoft.com/en-us/xbox/forum/all/why-you-dont-release-minecraft-story-mode/4d254082-f67a-4edb-a3d0-f7b8d4279f28"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              Microsoft Answers: "Why don't you release Minecraft: Story Mode"
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://www.multistate.us/insider/2023/11/7/additional-states-pursue-right-to-repair-legislation-in-response-to-new-yorks-digital-fair-repair-act"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              Multistate: Additional States Pursue Right to Repair Legislation
              in Response to New York's Digital Fair Repair Act
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://www.reuters.com/technology/eu-parliament-adopts-rules-common-charger-electronic-devices-2022-10-04/"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              Apple forced to change charger in Europe as EU approves overhaul
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={"https://www.youtube.com/channel/UCl2mFZoRqjw_ELax4Yisf6w"}
              style={{ color: "rgb(0,0,0)" }}
            >
              Louis Rossmann YouTube Channel
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={"https://www.bbc.com/news/technology-57744091"}
              style={{ color: "rgb(0,0,0)" }}
            >
              BBC: "Right to repair movement gains power in US and Europe"
            </Link>
          </p>
        </div>

        <div style={{ padding: "0.7rem" }} />

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
            Code:
          </h2>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            Below are links to the parts of the website. These encompass most of
            the changes made to the website, although there are a couple of
            small changes made to my main class to accomodate the new pages (on
            the order of 20 lines of code)
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://github.com/RegalTurtle24/regalturtle24.github.io/tree/RightToRepair371"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              Project branch of website
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://github.com/RegalTurtle24/regalturtle24.github.io/blob/RightToRepair371/src/pages/RightToRepair.tsx"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              Main page
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://github.com/RegalTurtle24/regalturtle24.github.io/tree/RightToRepair371/src/pages/RightToRepair"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              All subpages
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://github.com/RegalTurtle24/regalturtle24.github.io/tree/RightToRepair371/src/components/RightToRepair"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              Components used for pages
            </Link>
          </p>

          <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
            <Link
              to={
                "https://github.com/RegalTurtle24/regalturtle24.github.io/pull/18"
              }
              style={{ color: "rgb(0,0,0)" }}
            >
              Pull request with all changes
            </Link>
          </p>
        </div>
      </RightToRepairPageWithNavBar>
    </div>
  );
};

export default RightToRepairSources;
