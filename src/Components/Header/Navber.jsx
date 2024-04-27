import { menuData } from "../../db/data";
import React from "react";
import NavbarItem from "./NavberItem";
import { Box, Typography, Button } from "@mui/material";
import Image from "../Image";
import { FaXmark } from "react-icons/fa6";

const Navbar = ({ menu, setMenu }) => {
  return (
    <>
      <Box
        sx={{ paddingLeft: 0, display: { xs: "none", md: "flex" }, gap: 4 }}
        variant="ul"
        component="ul"
      >
        {menuData.map((item, index) => (
          <NavbarItem key={index} item={item.name} />
        ))}
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          zIndex: "999",
          borderLeft: "1px solid",
          borderColor: "primary.border",
          pl: "18px",
          boxSizing: "border-box",
          height: "100vh",
          position: "absolute",
          top: "0",
          right: "0",
          width: { xs: "80%", sm: "60%" },
          background: "white",
          pt: "26px",
          transform: `${menu && "translateY(0)"} translateY(-100%)`,
          transition: "1s all",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            cursor: "pointer",
            top: "3%",
            right: "5%",
          }}
          onClick={() => setMenu(!menu)}
        >
          <FaXmark fontSize="25px" />
        </Box>
        <Image img="/public/images/logo.png" />
        <Box
          display="flex"
          borderTop="1px solid"
          pl="14px"
          borderColor="primary.border"
          pt="30px"
          mt="30px"
          flexDirection="column"
          rowGap="20px"
        >
          {menuData.map((item, index) => (
            <NavbarItem key={index} item={item.name} />
          ))}
        </Box>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "6px",
            bgcolor: "white",
            fontWeight: "600",
            border: "1px solid",
            borderColor: "primary.border",
            px: "9px",
            width: "90%",
            mt: "40px",
            "&:hover": { bgcolor: "white" },
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "6px",
            width: "90%",
            mt: "14px",
            "&:hover": { bgcolor: "primary.light" },
          }}
          elevation={0}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default Navbar;
