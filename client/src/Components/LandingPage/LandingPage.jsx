import React from "react";
import { makeStyles } from "@material-ui/core";
import ProductCard from "../Products/ProductCard";
import Footer from "../Footer/Footer";

const style = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,

    backgroundColor: "#f1f1f1",
    padding: theme.spacing(3),
  },
  center: {
    textAlign: "center",
    backgroundColor:"red",
    height:"300px"
  },
}));

export default function Container() {
  const classes = style();

  return (
    <div className={classes.root}>
        {/* <div className={classes.toolbar}/> */}
        <div className={classes.content}>
       {/*  <div className={classes.center}>Acá iría un carrusel!</div> */}
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
}
