import React from "react";
import {
  Divider,
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
const useStyles = makeStyles((theme) => ({
  root_contactus: {
    padding: "8rem 0",
    backgroundColor: "white",
    width: "100%",
    overflow: "hidden",
  },
  contact_Container_contactus: {
    width: "70%",
    margin: "0 auto",
  },
  title_contact_us: {
    color: "#414141",
    fontSize: "1.5rem !important",
    padding: "1rem 3rem",
    fontFamily: "Roboto",
    fontWeight: "700 !important",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px ",
      padding: "1rem 0",
    },
  },
  divider_contact: {
    width: "90%",
    backgroundColor: "#b6b6b6",
    margin: "2rem 0 !important",
  },
  helpTitle_contact_us: {
    fontSize: "18px",
    color: "black",
    padding: "2rem 0",
  },
  para_contact: {
    paddingBottom: "3rem",
    marginLeft: "0.5rem",
    color: "#414141",
    lineHeight: "1.5rem",
    fontSize: "16px !important",
    width: "90%",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")] :{
      width : "100%"
    }
  },
  address_contacts: {
    paddingBottom: "3rem",
    marginLeft: "0.5rem",
    color: "#414141",
    lineHeight: "1.5rem",
    fontSize: "16px !important",
    width: "90%",
    letterSpacing: "2px",
  },
  buttonGroup: {
    "& > *": {
      margin: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    },
  },
  supportButton: {
    backgroundColor: "#292929 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "15px !important",
    },
  },
  callButton: {
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
    [theme.breakpoints.down("sm")]: {
      padding: "0.8rem 3.4rem   !important",
    },
  },
  formContainer_container: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  formField_contact: {
    // marginBottom: "2rem",
    width: "100%",
  },
  submitButtons: {
    alignSelf: "flex-start",
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "1rem 3rem   !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  SelectOption_contact: {
    width: "100%",
    marginBottom: "2rem",
    "& .MuiOutlinedInput-root_contactus": {
      "& fieldset": {
        borderColor: "#000",
        borderRadius: "none !important",
      },
      "&:hover fieldset": {
        borderColor: "#000",
        "&.Mui-focused fieldset": {
          borderColor: "#000",
        },
      },
    },
    "& .MuiSelect-root_contactus": {
      backgroundColor: "white",
      color: "black",
    },
    "& .MuiSelect-icon": {
      color: "black",
    },
    "& .MuiList-root_contactus": {
      backgroundColor: "white",
      color: "black",
    },
  },
  lableText_contact: {
    color: "#000",
    fontSize: "1rem",
    fontWeight: "500",
    marginBottom: "1rem",
  },
  menu_contact: {
    "& .MuiList-root_contactus": {
      backgroundColor: "white",
      color: "black",
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const alert = useAlert();
  const history = useHistory();
  const handleCall = () => {
    window.location.href = "tel:+21650558040";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert.success("Votre message est envoyé avec succés");
    history.push("/");
  };

  return (
    <Box className={classes.root_contactus}>
      <MetaData  title={"Contact"}/>
      <div className={classes.contact_Container_contactus}>
        <Typography variant="h2" className={classes.title_contact_us}>
          Contactez-Nous
        </Typography>

        <Divider className={classes.divider_contact} />

        <Typography variant="h4" className={classes.helpTitle_contact_us}>
        Besoin d'aide ?
        </Typography>

        <Typography variant="body2" className={classes.para_contact}>
        Nous mettons à votre disposition un chat en direct.
         Recherchez l'icône de chat dans le coin inférieur droit de cette page.
          Si vous ne la trouvez pas, vous pouvez nous appeler au {" "} .














{" "}
          <strong
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleCall}
          >
            +216 54615080
          </strong>
          .
        </Typography>
       

        <Typography variant="h4" className={classes.para_contact}>
          <strong > Horaires d'assistance : </strong>
          <br />
          
         
        </Typography>
        <Typography variant="body2" className={classes.para_contact}>
          <span className={classes.para2}>Lundi au vendredi : 7h00 - 18h00 </span>
          <br />
          <span className={classes.para2}>Samedi : 9h00 - 16h00 </span>
          <br />
          <span className={classes.para2}>Dimanche : Fermé</span>
        </Typography>

        <Typography variant="body2" className={classes.para_contact}>
          
Vous nous contactez en dehors de ces horaires ? Remplissez notre formulaire d'assistance
 ci-dessous, et nous vous répondrons rapidement.
        </Typography>

        <Typography variant="body2" className={classes.address_contacts}>
          <span style={{ fontWeight: "500", paddingBottom: "0.5rem" }}>
            Conserverie ElMenzah9.
          </span>
          <br />
          Rue Hmaid Jbeilia, El Menzah 9C 
          <br />
          
          <br />
          Tunisie
        </Typography>

        <div className={classes.buttonGroup}>
       {/* <a href="#issue-select" style={{ textDecoration: "none" }}>
            <Button variant="contained" className={classes.supportButton}>
               Formulaire de support            </Button>
          </a>

          <Button
            variant="contained"
            className={classes.callButton}
            onClick={handleCall}
          >
            Appelez-Nous
          </Button>   */} 
        </div>

        <Divider className={classes.divider_contact} />
        <div className={classes.supportForm}>
          <Typography
            variant="h4"
            className={classes.title_contact_us}
            style={{ paddingBottom: "1rem" }}
          >
             Formulaire de Contact
          </Typography>

          <Typography variant="body2" className={classes.para_contact}>
          <strong>Besoin d'une réponse rapide ? </strong> 
         
          </Typography>

          <form
            className={classes.formContainer_container}
            onSubmit={handleSubmit}
          >
            <div className={classes.SelectOption_contact}>
             {/* <Typography variant="body2" className={classes.lableText_contact}>
                ISSUE *
              </Typography>
              <FormControl className={classes.formField_contact}>
                <Select
                  labelId="issue-label"
                  id="issue-select"
                  defaultValue="e-commerce"
                  MenuProps={{
                    classes: { paper: classes.menu_contact },
                  }}
                >
                  <MenuItem value="e-commerce">E-Commerce</MenuItem>
                  <MenuItem value="app">App</MenuItem>
                </Select>
              </FormControl>*/}
            </div>

         { /*  <div className={classes.SelectOption_contact}>
            <Typography variant="body2" className={classes.lableText_contact}>
                DETAIL *
              </Typography>
              <FormControl className={classes.formField_contact}>
                <Select
                  labelId="detail-label"
                  id="detail-select"
                  defaultValue="others"
                  MenuProps={{
                    classes: { paper: classes.menu_contact },
                  }}
                >
                  <MenuItem value="availability">Availability</MenuItem>
                  <MenuItem value="return/exchange">Return/Exchange</MenuItem>
                  <MenuItem value="technical-support">
                    Technical Support
                  </MenuItem>
                  <MenuItem value="invoicing">Invoicing</MenuItem>
                  <MenuItem value="tracking-info">Tracking Info</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              </FormControl>
            </div>
          
            <div className={classes.SelectOption_contact}>
              <Typography variant="body2" className={classes.lableText_contact}>
                Langue *
              </Typography>
              <FormControl className={classes.formField_contact}>
                <Select
                  labelId="language-label"
                  id="language-select"
                  defaultValue="francais"
                  MenuProps={{
                    classes: { paper: classes.menu_contact },
                  }}
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="frrnsh">Francais</MenuItem>
                 
                </Select>
              </FormControl>
            </div>
*/} 
            <div className={classes.SelectOption_contact}>
             
              <FormControl className={classes.formField_contact}>
                <TextField
                  variant="filled"
                  label="Email"
                  placeholder="Saisir Votre Email *"
                  id="email-input"
                  type="email"
                />
              </FormControl>
            </div>

            <div className={classes.SelectOption_contact}>
             
              <FormControl className={classes.formField_contact}>
                <TextField
                 variant="filled"
                  label="Message"
                  id="message-textarea"
                  multiline
                  rows={6}
                
                  placeholder="Ecrire un  Message *"
                />
              </FormControl>
            </div>
            <Button
              type="submit"
              variant="contained"
              className={classes.submitButtons}
            >
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default ContactForm;
