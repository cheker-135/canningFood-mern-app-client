import React from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import {   getAdminFoods } from "../../actions/foodAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import HeroSlider from "./HeroSilder";
import FeaturedSlider from "./FeatureSlider";
import ScrollAnimation from "react-animate-on-scroll";
import DishCard from "./DishesCard" ;



function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const {  foods } = useSelector((state) => state.foods);
  
  React.useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
    dispatch(getAdminFoods());
    
  }, [dispatch, error, alert,]);


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MataData title="Conserverie Menzah-9" />
          <div className="Home_Page">
            <div className="heroSlider_Home">
              <HeroSlider />
            </div>

            <div className="feature" style={{ marginTop: "2.7rem" }}>
              <h2
               style={{ 
                textAlign: "center", 
                fontFamily: "'Pacifico', cursive", 
                fontWeight: "bold", // 'Pacifico' looks best without bold weight
                marginTop: "50px", 
                fontSize: "2em" // Optionally, increase font size for better visibility
              }}
              >
                Nos Produits
              </h2>
              {products && <FeaturedSlider products={products} />}
            </div>

            <h2  style={{ 
  textAlign: "center", 
  fontFamily: "'Pacifico', cursive", 
  fontWeight: "bold", // 'Pacifico' looks best without bold weight
  marginTop: "50px", 
  fontSize: "2em" // Optionally, increase font size for better visibility
}}>Les Plats les plus conservés</h2>

<div className="trending-products">
  {foods && foods.length > 0 ? (
    foods.map((dish, index) => (
      <DishCard
        key={index} 
        product={{
          name: dish.name,
          description: dish.description,
          poids: dish.poids , 
          images: [{ url: dish.images[0].url }],
        }}
      />
    ))
  ) : (
    <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "20px" }}>
      Aucun plat disponible pour le moment.
    </p>
  )}
</div>

            <div className="map-section">
            <h2 style={{ 
  textAlign: "center", 
  fontFamily: "'Pacifico', cursive", 
  fontWeight: "bold", // 'Pacifico' looks best without bold weight
  marginTop: "50px", 
  fontSize: "2em" // Optionally, increase font size for better visibility
}}>Localisation</h2>
  <ScrollAnimation
  animateIn="fadeIn"
  style={{ 
    width: "100vw", 
    marginTop: "10vh", 
    marginBottom: "3vh", 
    marginLeft: "0vh", // Added spacing on the left
    marginRight: "1vh", // Spacing on the right
    border: "2px solid black", 
    borderRadius: "50px",
    overflow: "hidden"
  }}
>
  <iframe
    width="100%"
    height="600"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=conserverie+menzah9+V43R+65P, Ariana+(CONSERVERIE+MENZEH+9)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
  >
    <a href="https://www.gps.ie/">gps trackers</a>
  </iframe>
</ScrollAnimation>
</div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
