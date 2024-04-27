import { Box } from "@mui/system";
import { FaFacebook } from "react-icons/fa";
import Container from "@mui/material/Container";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
const Footer = () => {
  return (
    <Box bgcolor="primary.footer" py="50px">
      <Container maxWidth="xl">
        <Grid
          container
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-end" }}
          rowGap={"20px"}
        >
          <Grid
            sm={6}
            color="white"
            fontSize="24px"
            display={{ xs: "flex", sm: "block" }}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Typography variant="h6" mb="18px">
              Social Media Of Sharaf
            </Typography>
            <Box display="flex" gap="14px">
              <Link
                href="https://www.youtube.com/@sharafalhamza"
                color="inherit"
              >
                <FaYoutube />
              </Link>
              <Link href="https://twitter.com/SHARAFALHA" color="inherit">
                <BsTwitterX />
              </Link>
              <Link
                href="https://www.facebook.com/sharafalhamza"
                color="inherit"
              >
                <FaFacebook />
              </Link>

              <Link
                href="https://www.instagram.com/sharaf19191"
                color="inherit"
              >
                <FaInstagram />
              </Link>
            </Box>
          </Grid>
          <Grid sm={6}>
            <Typography variant="subtitle1" color="white" textAlign="right">
              Copy right by Sharaf Al Hamza
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
