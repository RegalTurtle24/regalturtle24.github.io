import React from "react";
import RightToRepairPageWithNavBar from "../../components/RightToRepair/RightToRepairPageWithNavBar";

const RightToRepairOtherIndustries = () => {
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
              Other Industries
            </h1>
            <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Although we focus on the personal device side of right to repair,
              it is an issue across many industries, and appears in a variety of
              different ways.
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
              The concept of Right to Repair isn't unique to electronics. In
              fact, it originated with the automotive industry. In the 1900's,
              Ford became pioneers in their industry in large part due to their
              ability to keep up with market trends and change from year to
              year. This change came with the push that, if you wanted to fix
              your car, only the Ford verified vendors should repair your car.
              This is very similar to what is going on right now in the tech
              sector, except instead of fixing cars we're fixing phones. The
              automotive industry has been able to make strides towards the
              right to repair
            </p>

            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              Another place where the attitude of Right to Repair comes up is in
              digital ownership. During the current age, many of the things we
              own are not actually ours, but essentially a pass to be able to
              access whatever service we are paying for, even when its not a
              subscription service. While this is not directly the same as Right
              to Repair, there is a lot of overlap in the people who fight for
              digital ownership as with physical ownership. Examples of not
              digitally owning things can be found all over the place from when{" "}
              <a
                href="https://nypost.com/2023/06/15/amazon-shuts-down-customers-smart-home-devices-over-false-racist-claim/"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                Amazon locked someone out of their house
              </a>
              , or, in the case of video games,{" "}
              <a
                href="https://answers.microsoft.com/en-us/xbox/forum/all/why-you-dont-release-minecraft-story-mode/4d254082-f67a-4edb-a3d0-f7b8d4279f28"
                style={{ color: "rgb(12, 69, 148)" }}
              >
                when video games that you have purchased are no longer playable
              </a>
              . This causes problems, as the things that you should own become
              no longer available to you, either because of deliberate action by
              companies, or by accident after a bankrupcy or other shutdown of a
              service.
            </p>
          </div>
        </div>
      </RightToRepairPageWithNavBar>
    </div>
  );
};

export default RightToRepairOtherIndustries;
