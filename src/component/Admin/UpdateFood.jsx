import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../layouts/MataData/MataData";
import Loader from "../layouts/loader/Loader";
import DescriptionIcon from "@material-ui/icons/Description";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";
import Sidebar from "./Siderbar";
import {
  updateFood,
  clearErrors,
  getFoodDetails,
} from "../../actions/foodAction";
import { useHistory } from "react-router-dom";
import { UPDATE_FOOD_RESET } from "../../constants/foodConstants";
import { useRouteMatch } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";


import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import CollectionsIcon from "@material-ui/icons/Collections";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import UpdateIcon from "@material-ui/icons/Update";
import Navbar from "./Navbar";
import useStyles from "../User/LoginFromStyle";

function UpdateFood() {
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();

  const classes = useStyles();
  const foodId = useRouteMatch().params.id;
  const { error, food } = useSelector((state) => state.foodDetails);

  const { loading, error: updateError, isUpdated } = useSelector(
    (state) => state.deleteUpdateFood
  );

  const [name, setName] = useState("");
  const [poids, setPoids] = useState(0);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const fileInputRef = useRef();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (food && food._id !== foodId) {
      dispatch(getFoodDetails(foodId));
    } else {
      setName(food.name);
      setPoids(food.poids);
      setDescription(food.description);
      setOldImages(food.images);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Plat mis à jour avec succès");
      history.push("/admin/foods");
      dispatch({ type: UPDATE_FOOD_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    history,
    isUpdated,
    foodId,
    food,
    updateError,
  ]);

  const createFoodSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("poids", poids);
    myForm.set("description", description);
    images.forEach((currImg) => {
      myForm.append("images", currImg);
    });

    dispatch(updateFood(foodId, myForm));
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const updateFoodImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);
    setOldImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((prev) => [...prev, reader.result]);
          setImages((prev) => [...prev, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <>
            <MetaData title="Mettre a jour Plat" />
            <div className={classes.updateProduct}>
              <div
                className={
                  !toggle ? `${classes.firstBox1}` : `${classes.toggleBox1}`
                }
              >
                <Sidebar />
              </div>
              <div className={classes.secondBox1}>
                <div className={classes.navBar1}>
                  <Navbar toggleHandler={toggleHandler} />
                </div>

                <div
                  className={`${classes.formContainer} ${classes.formContainer2}`}
                >
                  <form
                    className={`${classes.form} ${classes.form2}`}
                    encType="multipart/form-data"
                  >
                    <Avatar className={classes.avatar}>
                      < UpdateIcon />
                    </Avatar>
                    <Typography
                      variant="h5"
                      component="h1"
                      className={classes.heading}
                    >
                      Mette a jour un Plat
                    </Typography>
                    {/* SpellcheckIcon */}
                    <TextField
                        variant="filled"
                      fullWidth
                      style={{
                        marginBottom: 60,
                       
                      }}
                      className={`${classes.nameInput} ${classes.textField}`}
                      label="Nom du Plat"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <ShoppingCartOutlinedIcon
                              style={{
                                fontSize: 20,
                                color: "#414141",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                        variant="filled"
                      label="Poids"
                      value={poids}
                      required
                      fullWidth
                      style={{
                        marginBottom: 60,
                       
                      }}
                      className={`${classes.passwordInput} ${classes.textField}`}
                      onChange={(e) => setPoids(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{
                              fontSize: 20,
                              color: "#414141",
                            }}
                          >
                            <AttachMoneyIcon />
                          </InputAdornment>
                        ),
                      }}
                    />

                

                    

                    <TextField
                      variant="filled"
                      fullWidth
                      className={classes.descriptionInput}
                      label=" Description"
                      multiline
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <DescriptionIcon
                              className={classes.descriptionIcon}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <div className={classes.root}>
                      <div className={classes.imgIcon}>
                        <CollectionsIcon
                          fontSize="large"
                          style={{ fontSize: 40 }}
                        />
                      </div>

                      <input
                        type="file"
                        name="avatar"
                        className={classes.input}
                        accept="image/*"
                        onChange={updateFoodImagesChange}
                        multiple
                        style={{ display: "none" }}
                        ref={fileInputRef}
                      />
                      <label htmlFor="avatar-input">
                        <Button
                          variant="contained"
                          color="default"
                          style={{ paddingTop: 40 ,paddingBottom :40}}
                          className={classes.uploadAvatarButton}
                          startIcon={
                            <CloudUploadIcon
                              style={{
                                color: "#FFFFFF",
                              }}
                            />
                          }
                          onClick={handleImageUpload}
                        >
                          <p className={classes.uploadAvatarText}>
                          Telecharger Images
                          </p>
                        </Button>
                      </label>
                    </div>

                    {imagesPreview.length > 0 ? (
                      <Box className={classes.imageArea}>
                        {imagesPreview &&
                          imagesPreview.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt="Food Preview"
                              className={classes.image}
                            />
                          ))}
                      </Box>
                    ) : (
                      <Box className={classes.imageArea}>
                        {oldImages &&
                          oldImages.map((image, index) => (
                            <img
                              key={index}
                              src={image.url}
                              alt="Old Food Preview"
                              className={classes.image}
                            />
                          ))}
                      </Box>
                    )}

                    <Button
                      variant="contained"
                      className={classes.loginButton}
                      fullWidth
                      onClick={createFoodSubmitHandler}
                      disabled={loading ? true : false}
                    >
                      Mettre A Jour
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
}

export default UpdateFood;
