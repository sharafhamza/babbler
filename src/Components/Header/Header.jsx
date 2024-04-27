import React, { useState } from "react";
import Image from "../Image";
import Navber from "./Navber";
import { Box, Typography, Button } from "@mui/material";
import { HiBars3 } from "react-icons/hi2";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
const Header = () => {
  const [menu, setMenu] = useState(true);
  return (
    <Box bgcolor="primary.bg">
      <Container maxWidth="xl">
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
          py={2}
        >
          <Box sx={{ visibility: `${menu ? "visible" : "hidden"}` }}>
            <Link to="/">
              <Image img="/public/images/logo.png" />
            </Link>
          </Box>
          <Box
            borderRadius="50%"
            border="2px solid"
            borderColor="primary.border"
            width="35px"
            height="35px"
            alignItems="center"
            justifyContent="center"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setMenu(!menu)}
          >
            <HiBars3 fontSize="26px" color="primary.border" cursor="pointer" />
          </Box>
          <Navber menu={menu} setMenu={setMenu} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, gap: "8px" }}
            alignItems={"center"}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "6px",
                bgcolor: "white",
                fontWeight: "600",
                border: "1px solid",
                borderColor: "primary.border",
                px: "9px",
                "&:hover": { bgcolor: "white" },
              }}
            >
              Sign In
            </Button>
            <Link to="registration">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "6px",
                  "&:hover": { bgcolor: "primary.light" },
                }}
                elevation={0}
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
