import React from "react";
import { Link } from "react-router-dom";
import "./Return.css";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/logo1.jpeg";

const ReturnPolicyPage = () => {
  return (
    <div className="container__0">
      <MetaData title="Politique de Retour" />
      <div className="image-container">
        <img
          src={TermsImage}
          alt="Contexte"
        />
        <h1 className="policy-text">POLITIQUE DE RETOUR</h1>
      </div>
      <div className="content-container">
        <p>
          Merci de faire vos achats avec <strong> Conserverie El Menzah 9</strong> ! Nous
          souhaitons garantir votre satisfaction pour chaque achat. Si vous n'êtes
          pas entièrement satisfait de votre achat, nous proposons une politique
          de retour de <strong>30 jours</strong> pour la plupart des produits et
          de <strong>7 jours</strong> pour certains articles spécifiques.
        </p>
        <p>
          Pour être éligible à un retour, l'article doit être inutilisé, dans son
          emballage d'origine et dans le même état que vous l'avez reçu. Vous devrez
          également fournir une preuve d'achat. Veuillez noter que certains articles,
          tels que les produits personnalisés ou fabriqués sur commande, ne sont pas
          éligibles au retour, sauf en cas de défaut ou d'erreur de notre part.
        </p>
        <p>
          Si vous souhaitez initier un retour, veuillez contacter notre service
          client dans le délai de retour spécifié. Notre équipe vous guidera dans le
          processus de retour et vous fournira les instructions nécessaires ainsi que
          l'adresse de retour.
        </p>
        <p>
          Une fois que nous aurons reçu votre article retourné et vérifié son état,
          nous procéderons au remboursement sur le mode de paiement initial utilisé
          lors de l'achat. Veuillez prévoir jusqu'à <strong>[nombre de jours]</strong> 
          pour que le remboursement soit reflété dans votre compte.
        </p>
        <p>
          Veuillez noter que les frais d'expédition pour le retour sont à la charge
          du client, sauf si le retour est dû à un défaut ou une erreur de notre part.
          Nous recommandons d'utiliser un mode d'expédition traçable pour garantir la
          livraison sécurisée et rapide de votre retour.
        </p>
        <p>
          Si vous avez des questions ou si vous avez besoin d'une assistance
          supplémentaire concernant notre politique de retour, n'hésitez pas à
          contacter notre service client. Nous sommes là pour vous aider !
        </p>
        <h2>Informations de Contact :</h2>
        <p>
          Service Client - El Menzah 9
          <br />
          <span style={{ fontWeight: "500" }}>Email </span>: 
          support@elmenzah9.com
          <br />
          <span style={{ fontWeight: "500" }}>Téléphone </span>:  +216 50 55 80 40
          <br />
          <span style={{ fontWeight: "500" }}>
            Horaires : Du lundi au vendredi, de 9h00 à 17h00 (GMT+1)
          </span>
        </p>
        <p>
          Veuillez nous contacter si vous avez des préoccupations ou si vous
          avez besoin de précisions concernant notre{" "}
          <Link
            to="/policy/return"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "500",
            }}
          >
            politique de retour
          </Link>
          . Nous nous efforçons de fournir un service client de qualité et
          d'assurer votre satisfaction.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
