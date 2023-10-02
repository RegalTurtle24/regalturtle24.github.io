import React from "react";
import PageWithNavBar from "../components/PageWithNavBar";
import Alert from "../components/Alert";
import { Container, Row } from "react-bootstrap";

function Home() {
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
          }}
        >
          <div
            className="container-fluid rounded-4"
            style={{
              padding: "3rem",
              textAlign: "center",
              width: "75%",
              background:
                "linear-gradient(315deg, rgba(39, 245, 219, 0.8), rgba(35, 186, 166, 0.8), rgba(33, 218, 129, 0.9), rgba(59, 162, 70, 0.8), rgba(33, 218, 129, 0.9), rgba(35, 186, 166, 0.8), rgba(39, 245, 219, 0.8))",
            }}
          >
            <h1
              style={{ fontFamily: "'Monotype Corsiva'", fontWeight: "bold" }}
            >
              Thys Vanderschoot
            </h1>
            <h2 style={{ fontFamily: "'Monotype Corsiva", fontWeight: "bold" }}>
              She/Her
            </h2>
          </div>

          <div style={{ padding: "2rem" }} />

          <div
            className="container-fluid rounded-4"
            style={{
              padding: "1rem",
              textAlign: "left",
              width: "90%",
              backgroundColor: "rgba(0, 47, 108, 0.3)",
            }}
          >
            <h2 style={{ paddingLeft: "1rem" }}>About me:</h2>
            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              I'm a second year Computer Science student at Stevens Institute of
              Technology. I am interested in game and software development. I
              have been a TA for AP CSP at Tesla STEM High School, taught basic
              programming for Coding With Kids in the Seattle area, and am
              currently a Course Assistant for CS 135 (Discrete Structures) at
              Stevens.
            </p>
            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              I am active as a member of Out in STEM (oSTEM) as a member of the
              executive board, I sing in choir at Stevens, and I play on the
              club soccer team. I love playing video games, especially Risk of
              Rain 2, which I also develop mods for. I play Magic: the
              Gathering, and the other portion of the website will host a place
              to track statistics of my games.
            </p>
          </div>

          <div style={{ padding: "1rem" }} />

          <div
            className="container-fluid rounded-4"
            style={{
              padding: "1rem",
              textAlign: "left",
              width: "90%",
              backgroundColor: "rgba(0, 47, 108, 0.3)",
            }}
          >
            <h2 style={{ paddingLeft: "1rem" }}>Contact me:</h2>

            <div className="container text-center">
              <div className="row">
                <div className="col my-auto">
                  <a href="https://github.com/RegalTurtle24">
                    <img
                      src="src\assets\images\github.png"
                      style={{
                        height: "4rem",
                        width: "4rem",
                      }}
                    ></img>
                  </a>
                </div>

                <div className="col my-auto">
                  <img
                    src="src\assets\images\discord.png"
                    style={{
                      height: "2rem",
                      width: "10.545rem",
                    }}
                  ></img>
                </div>

                <div className="col my-auto">
                  <img
                    src="src\assets\images\gmail.png"
                    style={{
                      height: "4rem",
                      width: "5.375rem",
                    }}
                  ></img>
                </div>

                <div className="col my-auto">
                  <a href="https://www.linkedin.com/in/thys-vanderschoot-900559220">
                    <img
                      src="src\assets\images\linkedin.png"
                      style={{
                        height: "4rem",
                        width: "4rem",
                      }}
                    ></img>
                  </a>
                </div>

                <div className="col my-auto">
                  <img
                    src="src\assets\images\phone.png"
                    style={{
                      height: "4rem",
                      width: "4rem",
                    }}
                  ></img>
                </div>
              </div>

              <div className="row" style={{ height: "0.5rem" }}></div>

              <div className="row">
                <div className="col my-auto">RegalTurtle24</div>
                <div className="col my-auto">regalturtle</div>
                <div className="col my-auto">thysvanderschoot@gmail.com</div>
                <div className="col my-auto">Thys Vanderschoot</div>
                <div className="col my-auto">(773)540-9546</div>
              </div>

              <div className="row" style={{ height: "1rem" }}></div>

              <div className="row">
                <div className="col my-auto">
                  https://github.com/RegalTurtle24
                </div>
                <div className="col my-auto"></div>
                <div className="col my-auto"></div>
                <div className="col my-auto">
                  https://www.linkedin.com/in/thys-vanderschoot-900559220
                </div>
                <div className="col my-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </PageWithNavBar>
    </div>
  );
}

export default Home;
