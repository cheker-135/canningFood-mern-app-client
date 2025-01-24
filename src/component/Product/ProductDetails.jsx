import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { IconButton, Input } from "@material-ui/core";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";


import {
  generateDiscountedPrice,
  calculateDiscount,
  dispalyMoney,
} from "../DisplayMoney/DisplayMoney";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Rating from "@material-ui/lab/Rating";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import useActive from "../hook/useActive";
import ReviewCard from "./ReviewCard";
import {
  clearErrors,
  getProductDetails,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import MetaData from "../layouts/MataData/MataData";
import { addItemToCart } from "../../actions/cartAction";
import CricketBallLoader from "../layouts/loader/Loader";
import Button from "@mui/material/Button";
import { PRODUCT_DETAILS_RESET } from "../../constants/productsConstatns";

const ProductDetails = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [quantity, setQuantity] = useState(1);

  const [previewImg, setPreviewImg] = useState("");
  const { handleActive, activeClass } = useActive(0);

  const { product, loading, error , success  } = useSelector(
    (state) => state.productDetails
  );

useEffect(() => {
  if (error) {
    alert.error(error);
    dispatch(clearErrors);
  }
  if (success) {
    setPreviewImg(product.images[0].url);

    handleActive(0);
    dispatch({ type: PRODUCT_DETAILS_RESET });
  }
  dispatch(getProductDetails(match.params.id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [
  dispatch,
  error,
  alert,
  success,
  match.params.id,

]);

  // handling Add-to-cart
  const handleAddItem = () => {

    dispatch(addItemToCart(match.params.id, quantity));
    alert.success("Article ajouté au panier");
  };

  // handling Preview image
  const handlePreviewImg = (images, i) => {
   
    setPreviewImg(images[i].url);
    handleActive(i);
  };

  function increaseQuantityHandler() {
    if (product.Stock <= quantity) {
      return;
    }

    setQuantity((prv) => prv + 1);
  }

  function deceraseQuantityHandler() {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prv) => prv - 1);
  }

  // calculating Prices
  const finalPrice = generateDiscountedPrice(product.price);
  const discountedPrice = product.price - finalPrice;
  const newPrice = dispalyMoney(finalPrice);
  const oldPrice = dispalyMoney(product.price);
  const savedPrice = dispalyMoney(discountedPrice);
  const savedDiscount = calculateDiscount(discountedPrice, product.price);

  return (
    <>
      {loading ? (
        <CricketBallLoader />
      ) : (
        <>
          <div className="prodcutDetialsContainer">
            <MetaData title={product.name} />
            <section id="product_details" className="section">
              <div className="product_container">
                <div className="wrapper prod_details_wrapper">
                  {/*=== Product Details Left-content ===*/}
                  <div className="prod_details_left_col">
                    <div className="prod_details_tabs">
                      {product.images &&
                        product.images.map((img, i) => (
                          <div
                            key={i}
                            className={`tabs_item ${activeClass(i)}`}
                            onClick={() => handlePreviewImg(product.images, i)}
                          >
                            <img src={img.url} alt="product-img" />
                          </div>
                        ))}
                    </div>
                    <figure className="prod_details_img">
                      <img src={previewImg} alt="product-img" />
                    </figure>
                  </div>

                  {/*=== Product Details Right-content ===*/}
                  <div className="prod_details_right_col_001">
                    <h1 className="prod_details_title">{product.name}</h1>
                    <h4 className="prod_details_info">
                      {product.info && product.info}
                    </h4>

                    <div className="prod_details_ratings">
                      <Rating
                        value={product.ratings}
                        precision={0.5}
                        readOnly
                        style={{ color: "black", fontSize: 16 }}
                      />
                      <span>|</span>
                      <Link
                        to="#"
                        style={{ textDecoration: "none", color: "#414141" }}
                      >
                        {product.numOfReviews} Évaluations
                      </Link>
                    </div>

                   <div className="prod_details_price">
                    {/*  <div className="price_box">
                        <h2 className="price">
                          {newPrice} &nbsp;
                          <small className="del_price">
                            <del>{oldPrice}</del>
                          </small>
                        </h2>
                        <p className="saved_price">
                          Vous économisez : {savedPrice} ({savedDiscount}%)
                        </p>
                        <span className="tax_txt">
                          (Taxes incluses)
                        </span>
                      </div>*/} 

                      <div className="badge">
                        {product.Stock >= 1 ? (
                          <span className="instock">
                            <DoneIcon /> En stock
                          </span>
                        ) : (
                          <span className="outofstock">
                            <CloseIcon />
                            En rupture de stock
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="seprator2"></div>

                    <div className="productDescription">
                      <div className="productDiscriptiopn_text">
                        <h4>Description :</h4>
                        <p>{product.description}</p>
                      </div>
                     {/*  <div className="prod_details_offers">
                        <h4>Offres et Remises</h4>
                        <ul>
                          <li>EMI sans frais sur carte de crédit</li>
                          <li>Payer plus tard et bénéficier de cashback</li>
                        </ul>
                      </div>
                      <div className="deliveryText">
                        <LocalShippingOutlinedIcon />
                        Nous livrons ! Dites-nous simplement quand et comment.
                      </div>
                      */}
                    </div>
                    
                    <div className="seprator2"></div>
                    <div className="prod_details_additem">
                       <Link to="/booking"  >
                      
                    <Button
                        variant="contained"
                        className="prod_details_addtocart_btn"
                       // onClick={handleAddItem}
                        //disabled={product.Stock <= 0}
                        style={{ width:"150px" }}
                      >
                        Reservez 
                      </Button>
                      </Link>
                      </div>
                   

                    
                    </div>
                
                </div>
              </div>
            </section>
            <div className="reviewCard">
              <ReviewCard product={product} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
