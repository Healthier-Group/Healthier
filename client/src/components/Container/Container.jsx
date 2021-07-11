import React from "react";
import {makeStyles} from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ProductCard from "../Products/ProductCard";

const style = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#f1f1f1",
    padding: theme.spacing(3),
  },
  center: {
    textAlign: "center",
  },
}));

export default function Container() {
  const classes = style();

  return (
    <div className={classes.root}>
      <NavBar />
        <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <div className={classes.center}>Acá iría un carrusel!</div>
        <ProductCard />
      </div>
      <Footer />
    </div>
  )
}
