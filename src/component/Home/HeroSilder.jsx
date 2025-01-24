import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  slide: {
    height: "calc(100vh - 64px)",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "60vh",
    },
  },
  slideContent: {
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translateY(-50%)",
    textAlign: "left",
    color: "#fff",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
  },
  quote: {
    fontSize: "16px",
    fontWeight: 500,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  saleText: {
    fontSize: "32px",
    fontFamily: "Roboto",
    fontWeight: "800",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  productButton: {
    backgroundColor: "transparent",
    color: "#fff",
    border: `1px solid ${theme.palette.common.white}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 3),
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: "#000",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      padding: theme.spacing(0.5, 2),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      padding: theme.spacing(0.5, 1.5),
    },
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const slides = [
  {
    image: require("../../Image/heroslider07.jpg"),
    saleText: "Saveurs Authentiques : des conserves artisanales pour vos moments gourmands",
    productText: "Réserver",
  },
  {
    image: require("../../Image/heroslider02.jpg"),
    saleText: "Préservez la fraîcheur, savourez l'authenticité.",
    productText: "Réserver",
  },
  {
    image: require("../../Image/heroslider03.jpg"),
    saleText: "Découvrez le goût authentique des produits de notre terroir",
    productText: "Réserver",
  },
  {
    image: require("../../Image/heroslider04.jpg"),
    saleText: "Nos conserves: Le mariage parfait entre tradition et qualité",
    productText: "Réserver",
  },
  {
    image: require("../../Image/heroslider05.jpg"),
    saleText: "Des saveurs d'exception, prêtes à sublimer vos repas.",
    productText: "Réserver",
  },
  {
    image: require("../../Image/heroslider06.jpg"),
    saleText: "Faites confiance à notre conserverie pour une expérience culinaire unique",
    productText: "Réserver",
  },
];

export default function HeroSlider() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % slides.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + slides.length) % slides.length
    );
  };

  return (
    <Carousel
      autoPlay={true}
      navButtonsAlwaysVisible
      indicators={false}
      animation="slide"
      interval={3000}
      timeout={500}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#00000088",
          borderRadius: 0,
          padding: 0,
          margin: 0,
          height: "100%",
        },
      }}
      prevButton={
        <Button
          className="slider-nav-btn prev"
          onClick={handleBack}
          startIcon={<ArrowBackIosIcon />}
        ></Button>
      }
      nextButton={
        <Button
          className="slider-nav-btn next"
          onClick={handleNext}
          endIcon={<ArrowForwardIosIcon />}
        ></Button>
      }
      fullHeightHover={false}
      className={classes.slide}
      index={activeStep}
      onChangeIndex={setActiveStep}
    >
      {slides.map((slide, index) => (
        <div key={index} className={classes.slide}>
          <img
            src={slide.image}
            alt={`slider-${index}`}
            className={classes.slideImage}
          />
          <div className={classes.slideContent}>
            <h3 className={classes.saleText}>{slide.saleText}</h3>
            <Link to="/booking">
              <Button className={classes.productButton}>
                {slide.productText}
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
