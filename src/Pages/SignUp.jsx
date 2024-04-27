import { Grid, Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Image from "../Components/Image";
import TextField from "@mui/material/TextField";
import { footerMenuData } from "../db/data";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <Container>
        <Grid container alignItems="center" pt="150px">
          <Grid md={6}>
            <Link to="/">
              <Image img="/public/images/logo.svg" />
            </Link>
          </Grid>
          <Grid md={6} display="flex" justifyContent="flex-end">
            <Box
              component="form"
              display="flex"
              flexDirection={"column"}
              alignItems="flex-start"
              rowGap={"20px"}
              width={"440px"}
            >
              <Typography
                variant="h2"
                component="h2"
                fontWeight="600"
                fontFamily="Kanit"
                textAlign="right"
                mb="10px"
              >
                Enjoy Chatting
              </Typography>
              <TextField
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{ width: "440px" }}
              />
              <TextField
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ width: "440px" }}
              />
              <TextField
                name="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ width: "440px" }}
              />
              <TextField
                name="password"
                id="outlined-basic"
                label="Confirm password"
                variant="outlined"
                sx={{ width: "440px" }}
              />
              <Button
                variant="contained"
                sx={{
                  width: "440px",
                  borderRadius: "50px",
                  fontWeight: "600",
                  py: "8px",
                  boxShadow: "0",
                  "&:hover": { boxShadow: "0" },
                }}
              >
                Sign Up
              </Button>
              <Typography
                variant="subtitle1"
                component="subtitle1"
                lineHeight="22px"
                fontSize="14px"
                mt="12px"
                display="inline-block"
              >
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </Typography>
              <Link to="/">
                <Typography
                  variant="h6"
                  component="h6"
                  fontSize="18px"
                  py="20px"
                >
                  Already have an account?
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box textAlign="center" mt="180px">
        {footerMenuData.map((item) => (
          <Typography
            variant="subtitle1"
            component="subtitle1"
            fontSize="14px"
            px="7px"
            color="primary.lightBlack"
          >
            {item.name}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default SignUp;
