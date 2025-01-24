import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/logo.jpeg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
    border : "5px solid grey ",
    borderRadius: "25px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      borderRadius: "50px",
    },
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "3rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "600 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"A propos"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={10} sm={5}>
              <img
                src={TermsImage}
                alt="About"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                compomnent="h1"
                classNae={classes.title_about}
              >
                À propos de nous
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
              <strong
              >     
La Conserverie de El Menzah 9
</strong> est une entreprise d'emballage alimentaire. Nous conservons les plats cuisinés après leur mise en boite dans des boites de conserve.
Ces plats cuisinés sont préparés par les clients eux-mêmes. Ensuite, nous fermons les boites. Et enfin, nous les strérilisons.


              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
              <strong
              >     
La Conserverie de El Menzah 9
</strong> a été fondée par Mourad Chebbi en 2019, un passionné de gastronomie
 qui s’est lancé dans cette aventure pour répondre à la demande croissante de produits authentiques
  et savoureux. Grâce à son engagement, il a su conquérir la confiance de milliers de clients.
   Aujourd'hui, son ambition est de développer d'avantage cette entreprise au niveau international en proposant une gamme élargie de formats d'emballage alimentaire à des prix
     compétitifs.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Qui sommes-nous ?
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          <strong
              >     
La Conserverie de El Menzah 9
</strong>
 se consacre à offrir des conserves alimentaires de qualité
           aux amateurs de gastronomie du monde entier. Notre mission est de préserver
            et de transmettre le goût authentique des produits locaux tout en garantissant
             une qualité irréprochable. Avec un souci constant d'innovation et de satisfaction
              client, nous sommes devenus une marque de confiance dans le domaine des conserves
               alimentaires.

Depuis notre lancement en 2019, nous avons bâti une solide base de clients fidèles
 et enrichi notre gamme de produits pour répondre aux attentes variées des consommateurs.
 Nous prenons soin de sélectionner et de tester chaque produit afin d'assurer une qualité optimale.
 


          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Chez
            <strong>     La Conserverie de El Menzah 9</strong>,
            La Conserverie de El Menzah 9 croit en l'importance de construire
             des relations durables avec ses clients. Nous nous engageons à fournir
              un service client exemplaire et à dépasser les attentes à chaque étape.
               Nous vous invitons à rejoindre cette belle aventure et à découvrir nos produits,
                fruits d’un savoir-faire traditionnel et d’une passion pour la qualité.
          </Typography>

        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Notre Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          <strong
              >     
La Conserverie de El Menzah 9
</strong> 
s'engage à proposer des conserves alimentaires
              de haute qualité à des prix abordables. Notre objectif est d'offrir un excellent service de conservation de plats cuisinés.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
          Nous innovons constamment pour élargir et améliorer notre gamme de produits, afin de
           répondre aux besoins changeants des consommateurs.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/booking"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
               Prendre un Rendez-vous
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
