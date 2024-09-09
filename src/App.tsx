import React from "react";
import placeholder from "./Person2.png"
import "./App.css";
import {
  AppBar,
  Box,
  Toolbar,
  Link,
  Typography,
  ListItemText,
  List,
} from "@mui/material";

function App() {
  return (
    <section id="main">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="regular" className="flex-r">
            <Box maxWidth={"20%"}>
              <Typography variant="h6" color="inherit" component="div">
                Embezzlement Ensamble
              </Typography>
            </Box>
            <Link variant="h6" color="inherit" component="div">
              Products
            </Link>
            <Link variant="h6" color="inherit" component="div">
              About Us
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Typography variant="h1">Welcome to Embezzle Ensemble</Typography>
        <Box className="flex-r ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="10" y="10" width="80" height="80" fill="#00ff00" />
  <text x="50" y="50" font-family="Arial" font-size="40" fill="black" text-anchor="middle" dominant-baseline="middle">$</text>
  <path d="M10 10 L90 90 M90 10 L10 90" stroke="red" stroke-width="5" />
</svg>
          <Box>
            <Typography variant="h5">
              We're not just selling clothes. We're making a statement.
            </Typography>
            <Typography variant="h5">
              Our mission? Shine a spotlight on white-collar crime – through
              fashion.
            </Typography>
            <Typography>We believe in:</Typography>
            <List>
              <ListItemText>
                - Dressing for the job you *want*, even if it's slightly illegal
              </ListItemText>
              <ListItemText>
                - Making financial fraud fashionable (but not feasible)
              </ListItemText>
              <ListItemText>
                - Turning heads in the boardroom and the courtroom with Embezzle
                Ensemble,
              </ListItemText>
            </List>
            <Typography variant="h5">
              we believe in dressing for success... even if that success is
              slightly questionable. Swindle in style. (Metaphorically, of
              course.)
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default App;
