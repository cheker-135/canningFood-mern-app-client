import React, { useState , useEffect } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Grid,
  Avatar,
} from "@material-ui/core";
//import useStyles from "./LoginFromStyle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { login, clearErrors } from "../../actions/userAction";
import CricketBallLoader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MataData/MataData"
import logo from "../../Image/logo2.jpeg"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    marginTop:"100px",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("xs")]: {
      padding: "20px",
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
  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
    color: "#414141",
    fontWeight: "bold",
  },
  textField: {
    marginBottom: "15px",
    "& label": {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.down("xs")]: {
      "& .MuiInputBase-root": {
        fontSize: "0.85rem",
      },
      "& label": {
        fontSize: "0.8rem",
      },
    },
  },
  loginButton: {
    backgroundColor: "#ed1c24",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#b81a1e",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
      padding: "10px 0",
    },
  },
  forgotPasswordLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "0.9rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  termsAndConditionsText: {
    fontSize: "0.85rem",
    textAlign: "center",
    margin: "15px 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
  privacyText: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  ReservationButton: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));


export default function Login() {

    const history = useHistory();
    const loaction = useLocation();

    const dispatch = useDispatch();
    const alert = useAlert();

    const { isAuthenticated, loading, error } = useSelector(
      (state) => state.userData
    );

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(
      newEmail !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
    );
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  

  const isSignInDisabled = !(email && password && isValidEmail);

  
    const redirect = loaction.search
      ? loaction.search.split("=")[1]
      : "/account";
   useEffect(() => {
     if (error) {
      // alert.error(error);
       dispatch(clearErrors());
     }

     if (isAuthenticated) {
       history.push(redirect);
     }
   }, [dispatch, isAuthenticated, loading, error, alert , history , redirect]);

     function handleLoginSubmit(e) {
       e.preventDefault();
       dispatch(login(email, password));
     }


  return (
    <>
      <MetaData title={"connexion"} />
      {loading ? (
        <CricketBallLoader />
      ) : (
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <Avatar className={classes.avatar}>
             <img src={logo} alt="" />
            </Avatar>
            <Typography variant="h5" component="h1" className={classes.heading}>
            Connectez-vous à votre compte
            </Typography>
            <TextField
              label="Email"
              variant="filled"
              fullWidth
              style={{
                marginBottom: 30,
               
              }}
              className={`${classes.emailInput} ${classes.textField}`}
              value={email}
              onChange={handleEmailChange}
              error={!isValidEmail && email !== ""}
              helperText={
                !isValidEmail && email !== ""
                  ? "saisir un email valide."
                  : ""
              }
            />
            <TextField
              label="Mot de passe"
             variant="filled"
              type={showPassword ? "text" : "password"}
              fullWidth
              style={{
                marginBottom: 30,
               
              }}
              className={`${classes.passwordInput} ${classes.textField}`}
              InputProps={{
                endAdornment: (
                  <Button
                    
                  onClick={handleShowPasswordClick}
                  sx={{
                  
                    padding: "1px",  // Increases clickable area
                    color: "black",
                    "&:hover": {
                      color: "#ed1c24",
                      background: "none",
                    },
                  }}
                >
                   {showPassword ? (
  <VisibilityOff sx={{ fontSize: "22px" }} /> // Adjusts the icon size
) : (
  <Visibility sx={{ fontSize: "22px" }} /> // Adjusts the icon size
)}
                </Button>
                ),
              }}
              value={password}
              onChange={handlePasswordChange}
            />
            <Grid container className={classes.rememberMeContainer}>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="se souvenir de moi"
                />
              </Grid>
            {/*  <Grid item>
                <Link
                  to="/password/forgot"
                  className={classes.forgotPasswordLink}
                >
                  Mot de passe oubliè?
                </Link>
              </Grid>
              */} 
            </Grid>
            <Typography
              variant="body2"
              className={classes.termsAndConditionsText}
            >
              J'accepte les Conditions d'utilisation de Conserverie Menzah 9 et reconnais 
              que Conserverie Menzah 9 utilisera mes informations conformément à sa
              <Link to="/policy/privacy" className={classes.privacyText}>
                Privacy Policy.
              </Link>
            </Typography>
            <Button
              variant="contained"
              className={classes.loginButton}
              fullWidth
              disabled={isSignInDisabled}
              onClick={handleLoginSubmit}
            >
              Se connecter
            </Button>
           {/*  <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
             Vous n'avez pas de compte ?
              <Link to="/signup" className={classes.createAccount}>
                Creer un compte 
              </Link>
           </Typography>
            */}
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
             Ou
              
            </Typography>
            
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
           <strong>Prendre un rendez-vous en toute simplicité ?</strong>  
             <Button
              variant="contained"
              className={classes.loginButton}
              fullWidth
             
             // onClick={handleLoginSubmit}
            >
              <Link to="/booking"  className={classes.ReservationButton}>
                Reserver un Rendez-vous 
              </Link>
              </Button>
            </Typography>
          </form>
        </div>
      )}
    </>
  );
}
