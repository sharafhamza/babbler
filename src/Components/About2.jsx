import React from "react";
import Container from "@mui/material/Container";
import Image from "./Image";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
const About1 = () => {
  return (
    <Box bgcolor="primary.bg" py={{ xs: "20px", md: "50px" }}>
      <Container maxWidth="xl">
        <Grid
          container
          rowSpacing={1}
          justifyContent="space-between"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid md={6} pt={{ xs: "4%", md: "120px" }}>
            <Typography
              fontSize={{ xs: "20px", sm: "30px", md: "38px" }}
              variant="h2"
              component="h2"
              mb="15px"
              fontWeight={600}
            >
              Where hanging out is easy
            </Typography>
            <Typography
              component="subtitle1"
              variant="subtitle1"
              color="primary.lightBlack"
              display="block"
              width={{ xl: "80%" }}
            >
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </Typography>
          </Grid>
          <Grid
            md={6}
            mt={{ xs: "4%", lg: "30px" }}
            width={{ xl: "80%" }}
            m={"auto"}
          >
            <Image img={"/public/images/about2.svg"} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About1;
