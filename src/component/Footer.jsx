import { Box, Container, Grid, Stack, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: 10,
        marginBottom: 0,
      }}
    >
      <Container maxWidth="false">
        <Grid sx={{marginTop:3}} container direction="row" alignItems="left">
          <Grid item sx={{marginRight:0}} xs={8}>
            <Typography color="secondary.main" variant="h5">
              Recipe Fetcher
            </Typography>
            <Typography color="secondary.main" variant="p">
              2024
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography color="secondary.main" variant="h6">
              Site links
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link underline="none" color="secondary" href="/">
                All Recipes
              </Link>
              <Link  underline="none" color="secondary" href="#">
                Categories
              </Link>
              <Link  underline="none" color="secondary" href="https://github.com/sarahthebest">
                My github
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
