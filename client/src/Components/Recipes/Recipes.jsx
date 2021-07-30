import React from "react";
import Hierbas from "../../Images/hierbas.jpg";
import { Hidden } from "@material-ui/core";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";



export default function Recipes() {
  
  return (
    <div>
      <NavBar />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
        }}
      >
        <h1 style={{textAlign:"center"}}>Próximamente</h1>
        <Hidden only={["xs", "sm"]}>
        <img
          src={Hierbas}
          alt="Not found"
          width="400px"
          height="300px"
          style={{ display: "flex", margin: "auto" }}
        />
        </Hidden>
        <Hidden only={["md", "lg", "xl"]}>
        <img
          src={Hierbas}
          alt="Not found"
          width="80%"
          height="300px"
          style={{ display: "flex", margin: "auto" }}
        />
        </Hidden>
      </div>

      <Footer />
    </div>
  );
}
