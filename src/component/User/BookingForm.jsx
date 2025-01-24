import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios" ;
import "react-datepicker/dist/react-datepicker.css";
import {
  TextField,
  Button,
  Typography,
  Avatar,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { makeStyles } from "@mui/styles";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import useStyles from "./LoginFromStyle";
import CricketBallLoader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layouts/MataData/MataData";
import logo from "../../Image/logo2.jpeg"
import axiosInstance from '../../axiosConfig';

export default function BookingForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "choisir un service ",
    message: "",
  });

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const alert = useAlert();

  const formStyles = makeStyles((theme) => ({
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
    textField: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#000",
        },
        "&:hover fieldset": {
          borderColor: "#ed1c24",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ed1c24",
          borderWidth: "1px",
        },
      },
    },

    avatar: {
      margin: " 8px auto",
      backgroundColor: "black",
      color :"white",
      width:"70px",
      height:"70px",
      borderRadius:"50px"
    },
    inputRoot: {
      "& .MuiInputLabel-outlined": {
        transform: "translate(14px, 14px) scale(1)",
      },
      "&.Mui-focused .MuiInputLabel-outlined": {
        transform: "translate(14px, -6px) scale(0.75)",
        backgroundColor: "white", // Optionnel, pour couvrir la bordure
        padding: "0 4px",
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
      marginTop: "2rem",
//marginBottom: "2rem",
      display: "flex",
      flexDirection: "column",
    },
    formField_contact: {
      // marginBottom: "2rem",
      width: "100%",
    },
    smallTypography:  {
       marginBottom: "0.5rem",
       fontSize: '0.9rem',
      fontFamily:"Poppins, sans-serif",
      color:" #414141 ",
    },
    submitButtons: {
      alignSelf: "flex-start",
      backgroundColor: "#292929 !important",
      color: "white   !important",
      width: "100%",
      padding: "1rem 3rem   !important",
      borderRadius: "5px !important",
      "&:hover": {
        backgroundColor: "#ed1c24 !important",
        color: "white !important",
      },
    },
    SelectOption_contact: {
      width: "100%",
      marginBottom: "1.5rem",
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

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.userData
  );

  const { name, email,phone, service, message } = formData;

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isBookedDisabled = !(
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.service &&
    formData.message &&
    selectedTime &&
    isValidEmail(formData.email)
  );

  const classes = useStyles();
  const formClasses = formStyles();

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const reservationData = {
      ...formData,
      date: startDate,
      time: selectedTime,
    };
  
    try {
      const response = await axiosInstance.post('/api/v1/reservations', reservationData, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.status === 201) {
        alert.success("Réservation envoyée avec succès!");
  
        // Clear form inputs after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "choisir un service",
          message: "",
        });
        setStartDate(new Date());
        setSelectedTime("");
      } else {
        alert.error(response.data.error || "Une erreur s'est produite");
      }
    } catch (error) {
     
      if (error.response && error.response.data && error.response.data.error) {
        alert.error(error.response.data.error);
      } else {
        alert.error("Erreur du serveur, veuillez réessayer plus tard.");
      }
    }
  };
  
  const itemsOptions = [
    { service: "Conservation de Fruits",  },
    { service: "Légumes de Saison",  },
    { service: " Plats Préparés",  },
    
  ];

  const timeSlots = [
    "09h-10h",
    "10h-11h",
    "11h-12h",
    "14h-15h",
    "15h-16h",
    "16h-17h",
    "17h-18h",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <MetaData title="Reservation" />
      {loading ? (
        <CricketBallLoader />
      ) : (
        <div className={classes.formContainer}>
          <form
            className={formClasses.formContainer_container}
            onSubmit={handleBookingSubmit}
          >
             <Avatar className={formClasses.avatar}>
             <img src={logo} alt="" />
            </Avatar>
            <Typography
              variant="h5"
              component="h1"
              className={classes.heading}
            >
              Prendre un Rendez-Vous!!
            </Typography>

            <div className={formClasses.SelectOption_contact}>
              
            <FormControl className={formClasses.formField_contact}>
           
            <TextField
             label="Nom complet"
             name="name"
             variant="filled"
             fullWidth
             value={name}
             onChange={handleChange}
             style={{
              marginBottom: 10,
             
            }}
             required
   
   
           //  className={classes.textField}
            />
             
            </FormControl>
            </div>
            <div className={formClasses.SelectOption_contact}>
            
              <FormControl className={formClasses.formField_contact}>
              <TextField
              label="Numéro de Téléphone"
              name="phone"
              variant="filled"
              fullWidth
            //  className={` ${classes.textField}`}
              value={phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
              style={{
                marginBottom: 10,
               
              }}
              required
            />
              </FormControl>
            </div>
             <div className={formClasses.SelectOption_contact}>
            
              <FormControl className={formClasses.formField_contact}  >
              <TextField
              label="Email"
              name="email"
               variant="filled"
              fullWidth
             // className={` ${classes.textField}`}
              value={email}
              onChange={handleChange}
              style={{
                marginBottom: 10,
               
              }}
              required
              error={!isValidEmail(email) && email !== ""}
              helperText={
                !isValidEmail(email) && email !== ""
                  ? "Veuillez entrer une adresse e-mail valide."
                  : ""
              }
              />
              </FormControl>
            </div>

          
       {/* 
            <div className={formClasses.SelectOption_contact}>
             <Typography className={formClasses.smallTypography}>Service*</Typography>
          


       <FormControl  variant="outlined" className={formClasses.formField_contact}>
       
                <Select
                
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                displayEmpty
               
                value={service} 
                onChange={(e) => setFormData({ ...formData, service: e.target.value })} 
                
                  required 
               
              
                >
                   
     
           <MenuItem disabled value="">
            <em>choisir un service</em>
          </MenuItem>
      {itemsOptions.map((option) => (
        <MenuItem key={option.service} value={option.service}>
          {option.service}
        </MenuItem>
      ))}
                 
                </Select>
              </FormControl>
           
            </div>   */}
        
            <div className={formClasses.SelectOption_contact}>
           
            <FormControl className={formClasses.formField_contact}>
  <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    dateFormat="dd/MM/yyyy"
    minDate={new Date()}
    style={{
      marginBottom: 10,
     
    }}
    customInput={
      <TextField
         variant="filled"
         label="Date*"
        fullWidth
        required
        InputProps={{
          endAdornment: (
            <InputAdornment  position="end">
              <IconButton >
              <CalendarTodayIcon sx={{ fontSize: "1rem" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    }
  />
</FormControl>
</div>
<div className={formClasses.SelectOption_contact}>

<FormControl className={formClasses.formField_contact}>
<Select
            
           
             value={selectedTime}  
           
               onChange={(e) => setSelectedTime(e.target.value)}
               displayEmpty
               fullWidth
                variant="filled"
                  label="Heure"
               required
               style={{
                marginBottom: 10,
               
              }}
              
               
                //  className={` ${classes.textField} `}
                
                
               
               >
               <MenuItem disabled value="">
  <em style={{ color: "grey", fontFamily: "'Roboto', sans-serif" }}>
    Heure*
  </em>
</MenuItem>

                 {timeSlots.map((slot) => (
                <MenuItem key={slot} value={slot}>
                  {slot}
                </MenuItem>
              ))}
             
                
               </Select>
  </FormControl>
</div>
           

            <div className={formClasses.SelectOption_contact}>
           
              <FormControl className={formClasses.formField_contact}>
                <TextField
                  variant="filled"
                 label="Message"
                 name="message"
                 value={message}
                 onChange={handleChange}
                  id="message-textarea"
                  multiline
                  rows={6}
                  style={{
                    marginBottom: 10,
                   
                  }}
                 
                  
                />
              </FormControl>
            </div>
            <Button
              type="submit"
              variant="contained"
              className={formClasses.submitButtons}
              disabled={isBookedDisabled}
            >
              Envoyer
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
