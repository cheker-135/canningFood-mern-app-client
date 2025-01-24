import React, { useState, useEffect } from "react";
import { Avatar, Button, TextField, Typography } from "@material-ui/core";
import SecurityUpdateGoodIcon from "@mui/icons-material/SecurityUpdateGood";
import useStyles from "./LoginFromStyle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import CricketBallLoader from "../layouts/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, clearErrors } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstanat";
import MetaData from "../layouts/MataData/MataData";
import { useHistory } from "react-router-dom"; 

function UpdatePassword() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, isUpdated, error } = useSelector(
    (state) => state.profileData
  );
  const alert = useAlert();

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setisValidConfirmPassword] = useState(true);
  const handleOldPassword = (event) => {
    setOldPassword(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
    setIsValidPassword(event.target.value.length >= 8);
  };
  const handleConfirmPasswordChange = (event) => {
    setconfirmPassword(event.target.value);
    setisValidConfirmPassword(event.target.value.length >= 8);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  function updatePasswordSubmitHandler(e) {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert.error("Les mots de passe ne correspondent pas");
      return;
    }
    const myForm = new FormData();
    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(updatePassword(myForm));
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Profile mis a jour avec succes!!");
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
      history.push("/account");
    }
  }, [dispatch, error, alert, isUpdated, loading, history]);

  const isSignInDisabled = !(
    newPassword &&
    confirmPassword &&
    oldPassword &&
    isValidPassword
  );

  return (
    <>
      <MetaData title={"Mettre a jour mot de passe"} />
      {loading ? (
        <CricketBallLoader />
      ) : (
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <Avatar className={classes.avatar}>
              <SecurityUpdateGoodIcon />
            </Avatar>
            <Typography variant="h5" component="h1" className={classes.heading}>
            Mettre a jour mot de passe
            </Typography>

            <TextField
              style={{ marginTop: "1rem" }}
              label="Ancien mot de passe"
              variant="standard"
              type={showPassword ? "text" : "password"}
              fullWidth
              className={`${classes.passwordInput} ${classes.textField}`}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="outlined"
                    className={classes.showPasswordButton}
                    onClick={handleShowPasswordClick}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                ),
              }}
              value={oldPassword}
              onChange={handleOldPassword}
            />
            <TextField
              style={{ marginTop: "4rem" }}
              label="Nouveau mot de passe"
             variant="standard"
              type={showPassword ? "text" : "password"}
              fullWidth
              className={`${classes.passwordInput} ${classes.textField}`}
              error={!isValidPassword && newPassword !== ""}
              helperText={
                !isValidPassword && newPassword !== ""
                  ? "Le mot de passe doit comporter au moins 8 caractères."
                  : ""
              }
              InputProps={{
                endAdornment: (
                  <Button
                    variant="outlined"
                    className={classes.showPasswordButton}
                    onClick={handleShowPasswordClick}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                ),
              }}
              value={newPassword}
              onChange={handlePasswordChange}
            />
            <TextField
              label="Confirmer mot de passe"
             variant="standard"
              type={showPassword ? "text" : "password"}
              fullWidth
              error={!isValidConfirmPassword && confirmPassword !== ""}
              helperText={
                !isValidConfirmPassword && confirmPassword !== ""
                  ? "Le mot de passe doit comporter au moins 8 caractères."
                  : ""
              }
              className={`${classes.passwordInput} ${classes.textField}`}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="outlined"
                    className={classes.showPasswordButton}
                    onClick={handleShowPasswordClick}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                ),
              }}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />

            <Button
              variant="contained"
              className={classes.loginButton}
              fullWidth
              disabled={isSignInDisabled}
              style={{ marginTop: "3.5rem" }}
              onClick={updatePasswordSubmitHandler}
            >
              Meetre a jour
            </Button>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: ".5rem" }}
            >
              <Link to="/account" className={classes.createAccount}>
                Annuler
              </Link>
            </Typography>
          </form>
        </div>
      )}
    </>
  );
}

export default UpdatePassword;
