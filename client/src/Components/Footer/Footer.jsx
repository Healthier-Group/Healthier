import { Container, Grid, Box, Link, makeStyles } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  position: {
    backgroundColor: "#1C2624",
    color: "#8FBF26",
    width: "100vw"
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
  },
  box: {
    textAlign: "center",
  },
  links: {
    textDecoration: "none",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.position}>
      <Grid container style={{margin:"auto"}}>
        <Grid item xs={4} className={classes.box}>
          <Box>
            <Link href="/" color="secondary" style={{ textDecoration: "none" }}>
              Contacto
            </Link>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.box}>
          <Link href="/" color="secondary" style={{ textDecoration: "none" }}>
            <Box>Newsletter</Box>
          </Link>
        </Grid>
        <Grid item xs={4} className={classes.box}>
          <Box className={classes.icons}>
            <Link href="/" color="secondary">
              <InstagramIcon />
            </Link>
            <Link href="/" color="secondary">
              <FacebookIcon />
            </Link>
            <Link href="/" color="secondary">
              <TwitterIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
}
