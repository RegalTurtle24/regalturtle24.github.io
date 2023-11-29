import LeftBlock from "../components/RightToRepair/LeftBlock";
import RightBlock from "../components/RightToRepair/RightBlock";
import RightToRepairPageWithNavBar from "../components/RightToRepair/RightToRepairPageWithNavBar";

const RightToRepair = () => {
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
              Right to Repair
            </h1>
            <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              A History and Current Actions
            </h3>
          </div>

          <div style={{ padding: "0.7rem" }} />
          <LeftBlock
            myheader={
              <a
                href="/#/right-to-repair/current-action"
                style={{ color: "rgba(37,37,37,1)" }}
              >
                Current Action
              </a>
            }
            mybody={`Look at what the Right to Repair movement working on changing at the moment.`}
          ></LeftBlock>

          <div style={{ padding: "0.7rem" }} />
          <RightBlock
            myheader={
              <a
                href="/#/right-to-repair/history"
                style={{ color: "rgba(37,37,37,1)" }}
              >
                History
              </a>
            }
            mybody={`Take a look at the history of the Right to Repair movement.`}
          ></RightBlock>

          <div style={{ padding: "0.7rem" }} />
          <LeftBlock
            myheader={
              <a
                href="/#/right-to-repair/international"
                style={{ color: "rgba(37,37,37,1)" }}
              >
                International Action
              </a>
            }
            mybody={`Although we are most affected by American laws and changes, international laws have sweeping effects, showing the power of convenience for these companies.`}
          ></LeftBlock>

          <div style={{ padding: "0.7rem" }} />
          <RightBlock
            myheader={
              <a
                href="/#/right-to-repair/other-industries"
                style={{ color: "rgba(37,37,37,1)" }}
              >
                Other Industries
              </a>
            }
            mybody={`Although we focus on the personal device side of right to repair, it is an issue across many industries, and appears in a variety of different ways.`}
          ></RightBlock>

          <div style={{ padding: "0.7rem" }} />
          <LeftBlock
            myheader={
              <a
                href="/#/right-to-repair/what-can-you-do"
                style={{ color: "rgba(37,37,37,1)" }}
              >
                What Can You Do?
              </a>
            }
            mybody={`Learn more about what you can do to be more knowledgable and stay up to date on the fight to gain the right to repair.`}
          ></LeftBlock>

          <div style={{ padding: "0.7rem" }} />
          <RightBlock
            myheader={
              <a
                href="/#/right-to-repair/concerns"
                style={{ color: "rgba(37,37,37,1)" }}
              >
                Potential Downfalls
              </a>
            }
            mybody={`Although there certainly are many reasons to adopt right to repair philosophies, there are understandable critiques of the idea that repair should be accessable.`}
          ></RightBlock>

          <div style={{ padding: "0.5rem" }} />
          <div
            className="container-fluid rounded-4"
            style={{
              textAlign: "center",
              marginBottom: "0rem",
              width: "25%",
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
              <a
                href="/#/right-to-repair/sources"
                style={{ color: "rgba(37, 37, 37, 1)" }}
              >
                Sources
              </a>
            </h1>
          </div>
        </div>
      </RightToRepairPageWithNavBar>
    </div>
  );
};

export default RightToRepair;
