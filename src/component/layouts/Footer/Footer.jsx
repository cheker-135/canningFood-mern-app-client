import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

const menuPiedPage = [
  {
    id: 1,
    titre: "Centre d'Aide",
    menu: [
      { id: 1, lien: "Suivi de Commande", chemin: "/orders" },
      { id: 2, lien: "FAQs", chemin: "/terms/conditions" },
      { id: 3, lien: "Annuler Réservation", chemin: "/policy/return" },
      { id: 4, lien: "Retour de Commande", chemin: "/policy/return" },
      { id: 5, lien: "Informations Garantie", chemin: "/policy/Terms" },
    ],
  },
  {
    id: 2,
    titre: "Politiques",
    menu: [
      { id: 1, lien: "Politique de Retour", chemin: "/policy/return" },
      { id: 2, lien: "Sécurité", chemin: "/policy/privacy" },
      { id: 3, lien: "Plan du Site", chemin: "/policy/Terms" },
      { id: 4, lien: "Politique de Confidentialité", chemin: "/policy/privacy" },
      { id: 5, lien: "T&C", chemin: "/terms/conditions" },
    ],
  },
  {
    id: 3,
    titre: "Entreprise",
    menu: [
      { id: 1, lien: "À Propos", chemin: "/about_us" },
      { id: 2, lien: "Nous Contacter", chemin: "/contact" },
      { id: 3, lien: "Centres de Service", chemin: "/" },
      { id: 4, lien: "Carrières", chemin: "/" },
      { id: 5, lien: "Affiliés", chemin: "/terms/conditions" },
    ],
  },
];

const reseauxSociaux = [
  { id: 1, icone: <FacebookIcon className="facebook_icon" fontSize="large" />, chemin: "https://www.FACEBOOK.com/Conserverie_Menzah9/" },
  { id: 2, icone: <TwitterIcon className="twitter_icon" fontSize="large" />, chemin: "https://twitter.com/Conserverie_Menzah9" },
  { id: 3, icone: <InstagramIcon className="insta_icon" fontSize="large" />, chemin: "https://www.instagram.com/Conserverie_Menzah9" },
  { id: 4, icone: <LinkedInIcon className="likedin_icon" fontSize="large" />, chemin: "https://www.linkedin.com/in/Conserverie_Menzah9/" },
];

const Footer = () => {
  const [emailAbonnement, setEmailAbonnement] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect runs only once on mount

  const handleSoumettre = (e) => {
    e.preventDefault();
    setEmailAbonnement("");
    alert("Merci, vous êtes désormais abonné(e) à notre newsletter quotidienne.");
  };

  const anneeActuelle = new Date().getFullYear();

  return (
    <>
      <footer className={`footer ${isMobile ? 'footer-mobile' : ''}`}>
        <div className="container">
          <div className="wrapper_footer footer_wrapper">
            <div className="foot_about foot1">
              <div className="foot_logo">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img src={require("../../../Image/logo.jpeg")} alt="logo conserverie" />
                </Link>
                <h4 className="foot_logo">Conserverie Menzah 9 </h4>
              </div>

             
            </div>

            <div className="foot_menu_container">
              {menuPiedPage.map((item) => {
                const { id, titre, menu } = item;
                return (
                  <div className="foot_menu foot2" key={id}>
                    <h4>{titre}</h4>
                    <ul>
                      {menu.map((item) => {
                        const { id, lien, chemin } = item;
                        return (
                          <li key={id}>
                            <Link to={chemin}>{lien}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="foot_links foot3">
             

              <div className="foot_social">
                {reseauxSociaux.map((item) => {
                  const { id, icone, chemin } = item;
                  return (
                    <a href={chemin} key={id} target="_blank" rel="noopener noreferrer">
                      {icone}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="separatorFooter"></div>

        <div className="sub_footer_root">
          <div className="container_Footer">
          

              <div className="foot_copyright">
                <p>
                  &copy; {anneeActuelle} | Conserverie Menzah 9, Tous Droits Réservés.
                { /* <Link  onClick={() => window.open("https://wa.me/21652488429")}>
                  
                    <a href=""> | Développé par :</a>
                  </Link>
                 */ }
                </p>
              </div>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
