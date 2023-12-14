import React from "react";
import RightToRepairPageWithNavBar from "../../components/RightToRepair/RightToRepairPageWithNavBar";

const RightToRepairToDo = () => {
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
              What Can You Do?
            </h1>
            <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Learn more about what you can do to be more knowledgable and stay
              up to date on the fight to gain the right to repair.
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
              There are several things you can do if you are interested in
              furthering Right to Repair. The{" "}
              <a
                href="https://www.repair.org"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                official Right to Repair website
              </a>{" "}
              is a good place to start, and they keep track of all of the
              different bills being passed and what is happening in the space.
            </p>

            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              In addition to the official Right to Repair website, there are
              also many YouTubers who are advocates of Right to Repair and
              regularly cover topics in that space. The most prominent of these
              would be{" "}
              <a
                href="https://www.youtube.com/channel/UCl2mFZoRqjw_ELax4Yisf6w"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                Louis Rossmann
              </a>
              , who runs a large YouTube channel and repair shop where he runs
              videos about the current actions going on in the Right to Repair
              sphere and advocates for changes where he sees a possibility for
              things to change.
            </p>

            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              The last thing that helps to encourage this atmosphere of repair
              is to look critically at products you own. Before throwing
              something away, try to repair it, or take it apart and see how it
              works. The better you know how your devices work, the more you
              will be able to identify what can be repaired. Being able to fix
              can help make you less dependant on the larger companies.
            </p>
          </div>
        </div>
      </RightToRepairPageWithNavBar>
    </div>
  );
};

export default RightToRepairToDo;
