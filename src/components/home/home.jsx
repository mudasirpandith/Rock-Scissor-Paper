import React, { useState } from "react";
import "./home.css";
import ResponsiveDialog from "./alert";

import { styled } from "@mui/material/styles";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import def1 from "../images/def1.jpg";
import def2 from "../images/def2.webp";
import { Button, Fab } from "@mui/material";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: "10px -2px",
  backgroundColor: "#219F94",
  color: theme.palette.text.secondary,
}));
export default function Home() {
  const [userSelected, setUserSelected] = useState(def1);
  const [computerSelected, setComputerSelected] = useState(def2);
  const [yourscore, setYourScore] = useState(0);
  const [tiescore, setTieScore] = useState(0);
  const [computerscore, setComputerscore] = useState(0);
  const [totalgames, setTotalgames] = useState(0);
  const list = [paper, scissors, rock];

  function setPaper() {
    setUserSelected(paper);

    setTotalgames(totalgames + 1);
    setComputerSelected(list[Math.floor(Math.random() * list.length)]);
    console.log(computerSelected);
  }
  const setRock = () => {
    setUserSelected(rock);
    setTotalgames(totalgames + 1);
    setComputerSelected(list[Math.floor(Math.random() * list.length)]);
    console.log(computerSelected);
  };
  const setScissors = () => {
    setUserSelected(scissors);

    setTotalgames(totalgames + 1);
    setComputerSelected(list[Math.floor(Math.random() * list.length)]);

    console.log(computerSelected);
  };
  function setAgain() {
    setYourScore(yourscore + 1);
    setUserSelected(def1);
    setComputerSelected(def2);
  }
  function setAgainTie() {
    setTieScore(tiescore + 1);
    setUserSelected(def1);
    setComputerSelected(def2);
  }
  function setComputer() {
    setComputerscore(computerscore + 1);
  }
  return (
    <>
      <div className="body">
        <h1 className="heading">Rock Scissor Paper</h1>
        <div className="scorecard">
          <Grid>
            <Item>
              <h3 className="score-title">Score</h3>
              <p className="scores">
                You won:{yourscore}/{totalgames}
              </p>
              <p className="scores">Tie:{tiescore}</p>{" "}
            </Item>
          </Grid>
        </div>
        <center>
          <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <h3>You selected</h3>
                <Item>
                  {" "}
                  <img className="game-images" src={userSelected} alt="paper" />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <h3>Computer selected</h3>
                <Item>
                  <img
                    className="game-images"
                    src={computerSelected}
                    alt="paper"
                  />
                </Item>
              </Grid>
              {userSelected === computerSelected ? (
                <Grid item xs={12}>
                  <Item>
                    <h1>GAME TIED</h1>
                    <Button variant="outlined" onClick={setAgainTie}>
                      play Again
                    </Button>
                  </Item>
                </Grid>
              ) : (
                <>
                  {(userSelected === scissors && computerSelected === paper) ||
                  (userSelected === rock && computerSelected === scissors) ||
                  (userSelected === paper && computerSelected === rock) ? (
                    <Grid item xs={12}>
                      <Item>
                        <h1 style={{ color: "green" }}>You Won the Game</h1>
                        <Button variant="outlined" onClick={setAgain}>
                          Play Again
                        </Button>
                      </Item>
                    </Grid>
                  ) : (
                    <Grid item xs={12}>
                      <h3>Select AnyOne</h3>
                      <Item>
                        <div className="selectImage">
                          <Box sx={{ "& > :not(style)": { m: 5 } }}>
                            {" "}
                            <Fab onClick={setPaper}>
                              <img
                                className="select-game-images"
                                src={paper}
                                alt="paper"
                              />
                            </Fab>
                            <Fab onClick={setRock}>
                              <img
                                className="select-game-images"
                                src={rock}
                                alt="paper"
                              />
                            </Fab>
                            <Fab onClick={setScissors}>
                              <img
                                className="select-game-images"
                                src={scissors}
                                alt="paper"
                              />
                            </Fab>
                          </Box>
                        </div>
                      </Item>
                    </Grid>
                  )}{" "}
                </>
              )}{" "}
            </Grid>
          </Box>
        </center>
        <div style={{ padding: "20px" }}>
          <ResponsiveDialog />
        </div>
        developed by{" "}
        <a href="https://www.linkedin.com/in/mudasir-pandith-a04b04202/">
          Mudasir Ahmad Pandith
        </a>
      </div>
    </>
  );
}
