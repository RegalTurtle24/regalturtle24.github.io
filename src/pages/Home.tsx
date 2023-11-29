import React from "react";
import PageWithNavBar from "../components/PageWithNavBar";
import Alert from "../components/Alert";
import { Container, Row } from "react-bootstrap";
import DiscordPhoto from "../assets/images/discord.png";
import GitHubPhoto from "../assets/images/github.png";
import GmailPhoto from "../assets/images/gmail.png";
import LinkedInPhoto from "../assets/images/linkedin.png";
import PhonePhoto from "../assets/images/phone.png";

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
              paddingBottom: "0.1rem",
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
            <p style={{ paddingLeft: "1rem", fontSize: "1.1rem" }}>
              I am proficient in Java and Python, and am learning or have worked
              in C, C++, C#, JavaScript, Scheme, TypeScript, and Assembly. I
              have also used HTML, CSS, React, and LaTeX.
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
                <div className="col">
                  <a href="https://github.com/RegalTurtle24">
                    <img
                      src={GitHubPhoto}
                      style={{
                        height: "4rem",
                        width: "4rem",
                      }}
                    ></img>
                  </a>
                  <div style={{ height: "1rem" }}></div>
                  <div>RegalTurtle24</div>
                  <div style={{ height: "1rem" }}></div>
                  <div>https://github.com/RegalTurtle24</div>
                  <div style={{ height: "1rem" }}></div>
                </div>
                <div className="col">
                  <div style={{ height: "4rem" }}>
                    <div style={{ height: "1rem" }}></div>
                    <img
                      src={DiscordPhoto}
                      className=""
                      style={{
                        height: "2rem",
                        width: "10.545rem",
                        verticalAlign: "sub",
                      }}
                    ></img>
                  </div>
                  <div style={{ height: "1rem" }}></div>
                  <div>regalturtle</div>
                  <div style={{ height: "1rem" }}></div>
                </div>
                <div className="col">
                  <img
                    src={GmailPhoto}
                    style={{
                      height: "4rem",
                      width: "5.375rem",
                    }}
                  ></img>
                  <div style={{ height: "1rem" }}></div>
                  <div>thysvanderschoot@gmail.com</div>
                  <div style={{ height: "1rem" }}></div>
                </div>
                <div className="col">
                  <a href="https://www.linkedin.com/in/thys-vanderschoot-900559220">
                    <img
                      src={LinkedInPhoto}
                      style={{
                        height: "4rem",
                        width: "4rem",
                      }}
                    ></img>
                  </a>
                  <div style={{ height: "1rem" }}></div>
                  <div>Thys Vanderschoot</div>
                  <div style={{ height: "1rem" }}></div>
                  <div>
                    https://www.linkedin.com/in/thys-vanderschoot-900559220
                  </div>
                  <div style={{ height: "1rem" }}></div>
                </div>
                <div className="col">
                  <img
                    src={PhonePhoto}
                    style={{
                      height: "4rem",
                      width: "4rem",
                    }}
                  ></img>
                  <div style={{ height: "1rem" }}></div>
                  <div>(773)540-9546</div>
                  <div style={{ height: "1rem" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWithNavBar>
    </div>
  );
}

export default Home;
