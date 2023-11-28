import PageWithNavBar from "../components/PageWithNavBar";
import LeftBlock from "../components/RightToRepair/LeftBlock";
import RightBlock from "../components/RightToRepair/RightBlock";

const RightToRepair = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(170, 170, 170, 1)",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <PageWithNavBar>
        <div
          className="container-fluid"
          style={{
            paddingTop: "3rem",
            paddingBottom: "2.5rem",
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
              A history and current actions
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
            mybody={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a iaculis at erat. Pellentesque habitant morbi tristique senectus."
            }
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
            mybody={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a iaculis at erat. Pellentesque habitant morbi tristique senectus."
            }
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
            mybody={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a iaculis at erat. Pellentesque habitant morbi tristique senectus."
            }
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
            mybody={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a iaculis at erat. Pellentesque habitant morbi tristique senectus."
            }
          ></RightBlock>

          <div style={{ padding: "0.7rem" }} />
          <LeftBlock
            myheader={
              <a
                href="/#/right-to-repair/what-can-you-do"
                style={{ color: "rgba(37,37,37,1)" }}
              >
                What can you do?
              </a>
            }
            mybody={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nibh mauris cursus mattis molestie a iaculis at erat. Pellentesque habitant morbi tristique senectus.`}
          ></LeftBlock>
        </div>
      </PageWithNavBar>
    </div>
  );
};

export default RightToRepair;
