import React from "react";
import PageWithNavBar from "../components/PageWithNavBar";

const RightToRepair = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(200, 200, 200, 1)",
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

          <div style={{ padding: "2rem" }} />

          <div
            className="container-fluid rounded-end-4"
            style={{
              padding: "3rem",
              textAlign: "left",
              width: "75%",
              marginLeft: "0rem",
              background:
                "linear-gradient(315deg, rgba(104, 125, 125, 0.8), rgba(125, 113, 104, 0.8), rgba(104, 125, 125, 0.8))",
            }}
          >
            <h1 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Placeholder
            </h1>
            <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Placeholder
            </h3>
          </div>

          <div style={{ padding: "0.7rem" }} />

          <div
            className="container-fluid rounded-start-4"
            style={{
              padding: "3rem",
              textAlign: "right",
              width: "75%",
              marginRight: "0rem",
              background:
                "linear-gradient(315deg, rgba(104, 125, 125, 0.8), rgba(125, 113, 104, 0.8), rgba(104, 125, 125, 0.8))",
            }}
          >
            <h1 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Placeholder
            </h1>
            <h3 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              nibh mauris cursus mattis molestie a iaculis at erat. Pellentesque
              habitant morbi tristique senectus. Odio pellentesque diam volutpat
              commodo sed egestas egestas. Urna molestie at elementum eu
              facilisis sed odio. Platea dictumst quisque sagittis purus sit
              amet volutpat. Pharetra magna ac placerat vestibulum lectus mauris
              ultrices eros. Felis imperdiet proin fermentum leo vel orci porta
              non pulvinar. Malesuada pellentesque elit eget gravida cum sociis
              natoque. Imperdiet sed euismod nisi porta. Lacus vel facilisis
              volutpat est velit egestas. Enim facilisis gravida neque
              convallis.
            </h3>
          </div>
        </div>
      </PageWithNavBar>
    </div>
  );
};

export default RightToRepair;
