import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import {Link} from 'react-router-dom'

import Image from "../../Images/hierbas.jpg";

const styles = {
  paperContainer: {
    // backgroundImage: `url(${Image})`,
    background: "rgb(119,175,140)",
    background:
      "radial-gradient(circle, rgba(119,175,140,1) 0%, rgba(61,178,106,1) 61%)",
    minHeight: 150,
    textAlign: "center",
    padding: 40,
    justifyContent: "center",
  },
  btn: {
    border: 1,
    background: "09DA5C",
  },
};

export default function Example(props) {
  var items = [
    {
      name: "10% de descuento en tu primera compra",
      description: "Obtené un descuento especial del 10% en tu primera compra",
      link: "",
    },
    {
      name: "Envio gratis para CABA y GBA",
      description: "Aprovechá el descuento y hace tu compra hoy",
      link: "",
    },
    {
      name: "Lanzamiento: Barrita de arroz CROWIE",
      description:
        "Conocé las nuevas barritas Crowie recién llegadas a nuestra web",
      link: "/products/11",
    },
  ];

  return (
    <Carousel interval="6000">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper style={styles.paperContainer}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      {(props.item.link!=="")? <Link to={props.item.link}>
      <Button className="CheckButton" style={styles.btn}>
        CLICK AQUÍ
      </Button>
      </Link>:<p></p>}
    </Paper>
  );
}
