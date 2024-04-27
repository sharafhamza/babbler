import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "../Image";
const Banner = () => {
  return (
    <Box bgcolor="primary.bg" py="30px">
      <Container maxWidth="xl">
        <Grid container position="relative">
          <Grid
            item
            xs={12}
            lg={5.5}
            pt={{ xs: "20px", sm: "60px", lg: "110px" }}
          >
            <Typography
              fontSize={{ xs: "22px", sm: "30px", md: "38px" }}
              textAlign={{ xs: "center", lg: "left" }}
              variant="h1"
              component="h1"
            >
              Stay connected and boost productivity with efficient
              communication.
            </Typography>
            <Box
              mt="20px"
              flexDirection={{ xs: "column", sm: "row" }}
              display="flex"
              gap={{ xs: 2, sm: 0 }}
              justifyContent={{ xs: "center", lg: "flex-start" }}
            >
              <Button
                sx={{
                  borderRadius: "6px",
                  bgcolor: "white",
                  fontWeight: "600",
                  border: "1px solid",
                  borderColor: "primary.border",
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: "12px", sm: "14px" },
                  px: "14px",
                  "&:hover": { bgcolor: "white" },
                  mr: "14px",
                }}
              >
                Get Smooth for Android
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "6px",
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: "12px", sm: "14px" },
                  "&:hover": { bgcolor: "primary.light" },
                }}
                elevation={0}
              >
                Download for windows
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            lg={6.5}
            mb={{ xs: "-28%", lg: "0" }}
            ml={{ xs: "auto", lg: "auto" }}
            mr={{ xs: "auto", lg: "0" }}
            textAlign={{ xs: "center", lg: "right" }}
            pt={{ xs: "40px", lg: "0" }}
          >
            <Image img="/public/images/banner.png" alt="Banner" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
