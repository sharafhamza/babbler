import React from "react";
import Container from "@mui/material/Container";
import Image from "./Image";
import { Grid, Typography } from "@mui/material";
const About1 = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        pt={{ xs: "4%", md: "210px", lg: "60px" }}
        container
        rowSpacing={1}
        justifyContent="space-between"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid
          md={6}
          mt={{ xs: "4%", lg: "30px" }}
          width={{ xs: "80%" }}
          m={"auto"}
        >
          <Image img={"/public/images/about1.svg"} />
        </Grid>
        <Grid md={6} pt={{ xs: "34%", md: "90px" }}>
          <Typography
            fontSize={{ xs: "20px", sm: "30px", md: "38px" }}
            variant="h2"
            component="h2"
            mb="15px"
            width={{ xs: "98%", xl: "60%" }}
            fontWeight={600}
          >
            Create an invite-only place where you belong
          </Typography>
          <Typography
            component="subtitle1"
            variant="subtitle1"
            color="primary.lightBlack"
            display="block"
            width={{ xl: "80%" }}
          >
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About1;
