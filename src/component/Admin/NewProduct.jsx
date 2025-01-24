import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../layouts/MataData/MataData";
import Loader from "../layouts/loader/Loader";
import Sidebar from "./Siderbar";
import { createProduct, clearErrors } from "../../actions/productAction";
import { useHistory } from "react-router-dom";
import { NEW_PRODUCT_RESET } from "../../constants/productsConstatns";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from "@material-ui/core/Box";
import DescriptionIcon from "@material-ui/icons/Description";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StorageIcon from "@material-ui/icons/Storage";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CollectionsIcon from "@mui/icons-material/Collections";
import InfoIcon from "@mui/icons-material/Info";

import Navbar from "./Navbar";

import useStyles from "../User/LoginFromStyle";
import {
  Avatar,
  TextField,
  Typography,

  Button,
} from "@material-ui/core";

function NewProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();

  const { loading, error, success } = useSelector(
    (state) => state.addNewProduct
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [Stock, setStock] = useState(0);
  const [info, setInfo] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const fileInputRef = useRef();
  const [toggle, setToggle] = useState(false);

  const classes = useStyles();
  // toggle handler =>
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Produit créé avec succès");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("Stock", Stock);
    myForm.set("info", info);
    images.forEach((currImg) => {
      myForm.append("images", currImg);
    });

    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Nouveau Produit"} />
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
                  onSubmit={createProductSubmitHandler}
                >
                  <Avatar className={classes.avatar}>
                    <AddCircleOutlineIcon />
                  </Avatar>
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.heading}
                  >
                    Créer Produit
                  </Typography>
                  <TextField
                   variant="filled"
                    fullWidth
                    style={{
                      marginBottom: 60,
                     
                    }}
                    className={`  ${classes.nameInput}`}
                    label="Nom Produit"
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
                    label="Prix"
                    value={price}
                    required
                    style={{
                      marginBottom: 60,
                     
                    }}
                    fullWidth
                    className={`${classes.nameInput} `}
                    onChange={(e) => setPrice(e.target.value)}
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
                    label="Stock"
                    value={Stock}
                    required
                    style={{
                      marginBottom: 60,
                     
                    }}
                    className={`${classes.nameInput} `}
                    onChange={(e) => setStock(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          style={{
                            fontSize: 20,
                            color: "#414141",
                          }}
                        >
                          <StorageIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="filled"
                    label="Information produit"
                    value={info}
                    required
                    style={{
                      marginBottom: 60,
                     
                    }}
                    className={`${classes.nameInput}`}
                    onChange={(e) => setInfo(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          style={{
                            fontSize: 60,
                            color: "#414141",
                          }}
                        >
                          <InfoIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                   variant="filled"
                    fullWidth
                    style={{
                      marginBottom: 10,
                     
                    }}
                    className={classes.descriptionInput}
                    label="Description du produit"
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
                      onChange={createProductImagesChange}
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
                          Télécharger des images
                        </p>
                      </Button>
                    </label>
                  </div>

                  <Box className={classes.imageArea}>
                    {imagesPreview &&
                      imagesPreview.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt="Aperçu du produit"
                          className={classes.image}
                        />
                      ))}
                  </Box>

                  <Button
                    variant="contained"
                    className={classes.loginButton}
                    fullWidth
                    type="submit"
                    disabled={loading ? true : false}
                  >
                    Créer
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default NewProduct;
