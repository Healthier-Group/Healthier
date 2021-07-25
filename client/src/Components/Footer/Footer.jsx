import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {Facebook, Twitter, Instagram} from "@material-ui/icons"

// const useStyles = makeStyles((theme) => ({
//   position: {
//     backgroundColor: "#1C2624",
//     position:"relative",
//     bottom:"0",
//     color: "#8FBF26",
//     width: "100vw"
//   },
//   icons: {
//     display: "flex",
//     justifyContent: "space-around",
//   },
//   box: {
//     textAlign: "center",
//   },
//   links: {
//     textDecoration: "none",
//   },
// }));

export default function Footer() {
  // const classes = useStyles();
  return (
    // <footer className={classes.position}>
     
    //   <Grid container style={{margin:"auto"}}>
    //     <Grid item xs={4} className={classes.box}>
    //       <Box>
    //         <Link href="/" color="secondary" style={{ textDecoration: "none" }}>
    //           Contacto
    //         </Link>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={4} className={classes.box}>
    //       <Link href="/" color="secondary" style={{ textDecoration: "none" }}>
    //         <Box>Newsletter</Box>
    //       </Link>
    //     </Grid>
    //     <Grid item xs={4} className={classes.box}>
    //       <Box className={classes.icons}>
    //         <Link href="/" color="secondary">
    //           <Instagram />
    //         </Link>
    //         <Link href="/" color="secondary">
    //           <Facebook />
    //         </Link>
    //         <Link href="/" color="secondary">
    //           <Twitter />
    //         </Link>
    //       </Box>
    //     </Grid>
    //   </Grid>
   
    // </footer>

    <BottomNavigation>
      <BottomNavigationAction label="Facebook" icon={<Facebook/>} />
      <BottomNavigationAction label="Twitter" icon={<Twitter/>} />
      <BottomNavigationAction label="Instagram" icon={<Instagram/>} />
    </BottomNavigation>
  );
}