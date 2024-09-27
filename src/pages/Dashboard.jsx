import React, { useState } from "react";
import HorizontalStepper from "../components/Stepper";
import { Box, Button, TextField, Typography } from "@mui/material";
import DeblurIcon from "@mui/icons-material/Deblur";

const steps = ["Create Account", "Next Step", "Next Step", "Final Step"];

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box sx={{ background: "lightBlue", height: "100vh" }}>
      <Box sx={{ pt: 8 }}>
        <HorizontalStepper steps={steps} activeStep={activeStep} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {activeStep === 4 ? (
          <Box
            sx={{
              width: 500,
              background: "white",
              mt: 6,
              borderRadius: 5,
              boxShadow: "10px 10px 5px #95d4e9",
              p: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography sx={{ mb: 1 }}>
                Thank You Successfully Submitted
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              width: 500,
              background: "white",
              mt: 6,
              borderRadius: 5,
              boxShadow: "10px 10px 5px #95d4e9",
              p: 4,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: 50,
                width: 50,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "-20px",
                right: "-20px",
                background: "aliceblue",
                boxShadow: "0 2px 2px #888888",
              }}
            >
              <DeblurIcon fontSize="large" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                mb: 5,
              }}
            >
              <Typography sx={{ mb: 1 }}>User Name</Typography>
              <TextField
                required
                id="userName"
                label="Enter user name"
                variant="outlined"
                sx={{ width: "100%" }}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                mb: 7,
              }}
            >
              <Typography sx={{ mb: 1 }}>Password</Typography>
              <TextField
                required
                id="password"
                label="Enter password"
                variant="outlined"
                sx={{ width: "100%" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                disabled={!(userName && password)}
                variant="contained"
                onClick={() => {
                  setActiveStep(activeStep + 1);
                }}
              >
                {activeStep === 3
                  ? "Submit"
                  : activeStep === 2
                  ? "3rd Step"
                  : activeStep === 1
                  ? "2nd Step"
                  : "Next"}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
