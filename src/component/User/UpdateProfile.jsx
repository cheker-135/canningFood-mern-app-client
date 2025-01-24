import React, { useState, useEffect } from "react";
import { Avatar, Button, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CricketBallLoader from "../layouts/loader/Loader";
import {
  clearErrors,
  updateProfile,
  load_UserProfile,
} from "../../actions/userAction";
import { useAlert } from "react-alert";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstanat";
import MetaData from "../layouts/MataData/MataData";
import { useHistory } from "react-router-dom";
import UpdateIcon from "@mui/icons-material/Update";
import useStyles from "./LoginFromStyle";
import { Link } from "react-router-dom";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

function UpdateProfile() {
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, isUpdated, loading } = useSelector(
    (state) => state.profileData
  );
  const { user } = useSelector((state) => state.userData);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidEName] = useState(true);
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(
      newEmail !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
    );
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      };
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsValidEName(event.target.value.length >= 4);
  };

  const UpdateProfileSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);

    dispatch(updateProfile(myForm));
  };

  useEffect(() => {
    // let say if user not update name and change other data then we setting all data from prv user data initaily for name , email, avatar

    if (user) {
      // console.log(user, "user");
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // isUpadted is nothing But success message from response. once user updated then pop the message and show profile data
    if (isUpdated) {
      alert.success("Profil mis à jour avec succes");
      // now get user New data from backend
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });

      // now reset all value . eg : isUpdate : false and all
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });

      history.push("/account");

      dispatch(load_UserProfile());
    }
  }, [dispatch, error, alert, history, user, isUpdated]);

  const isSignInDisabled = !(email && isValidEmail && name && isValidName);

  return (
    <>
      <MetaData title="Mettre a jour profil" />
      {loading ? (
        <CricketBallLoader />
      ) : (
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <Avatar className={classes.avatar}>
              <UpdateIcon />
            </Avatar>
            <Typography variant="h5" component="h1" className={classes.heading}>
            Mettre a jour profil
            </Typography>
            <TextField
              label="Nom"
              variant="outlined"
              fullWidth
              className={`${classes.nameInput} ${classes.textField}`}
              value={name}
              error={!isValidName && name !== ""}
              helperText={
                !isValidName && name !== ""
                  ? "Nom doit contenir au moins 4 caractéres."
                  : ""
              }
              onChange={handleNameChange}
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className={`${classes.emailInput} ${classes.textField}`}
              value={email}
              onChange={handleEmailChange}
              error={!isValidEmail && email !== ""}
              helperText={
                !isValidEmail && email !== ""
                  ? "inserer un email valide s'il vous plait."
                  : ""
              }
            />

            <div className={classes.root}>
              <Avatar
                alt="Avatar Preview"
                src={avatarPreview}
                className={classes.avatar2}
              />
              <input
                accept="image/*"
                className={classes.input}
                id="avatar-input"
                type="file"
                onChange={handleAvatarChange}
              />
              <label htmlFor="avatar-input">
                <Button
                  variant="contained"
                  color="default"
                  style={{ paddingTop: 40 ,paddingBottom :40}}
                  startIcon={<CloudUploadIcon style={{ color: "#FFFFFF" }} />}
                  component="span"
                  className={classes.uploadAvatarButton}
                >
                  <p className={classes.uploadAvatarText}>Recharger Avatar</p>
                </Button>
              </label>
            </div>

            <Button
              variant="contained"
              className={classes.loginButton}
              fullWidth
              disabled={isSignInDisabled}
              style={{ marginTop: "3rem" }}
              onClick={UpdateProfileSubmitHandler}
            >
              Mettre a jour 
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

export default UpdateProfile;
