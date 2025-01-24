import React from "react";
import { Link } from "react-router-dom";
import "./Privacy.css";
import MetaData from "../component/layouts/MataData/MataData";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <MetaData title={"Politique de Confidentialité"} />
      <div className="container___">
        <h1>Politique de Confidentialité de El Menzah 9</h1>
        <p style={{ fontSize: "16px", fontWeight: "600" }}>
          Date d'entrée en vigueur : 23-12-2021
        </p>
        <p>
          Chez El Menzah 9, nous accordons une grande importance à la
          confidentialité de nos clients et nous nous engageons à protéger vos
          informations personnelles. Cette Politique de Confidentialité explique
          comment nous collectons, utilisons, divulguons et protégeons vos
          informations lorsque vous utilisez notre site web et nos services.
          Veuillez lire attentivement cette Politique de Confidentialité. En
          accédant à notre site ou en utilisant nos services, vous reconnaissez
          avoir lu, compris et accepté tous les termes décrits dans cette
          politique.
        </p>
        <h2>1. Informations que Nous Collectons</h2>
        <h3>1.1 Informations Personnelles :</h3>
        <p>
          Nous pouvons collecter des informations personnelles que vous nous
          fournissez volontairement lorsque vous créez un compte, passez une
          commande, vous abonnez à notre newsletter, participez à des concours
          ou sondages, ou nous contactez pour une assistance. Ces informations
          peuvent inclure votre nom, adresse e-mail, numéro de téléphone,
          adresse de livraison, adresse de facturation et détails de paiement.
        </p>
        <h3>1.2 Informations Non-Personnelles :</h3>
        <p>
          Lorsque vous interagissez avec notre site web, nous pouvons collecter
          des informations non personnelles sur votre appareil, vos actions de
          navigation et vos habitudes d'utilisation. Ces informations peuvent
          inclure votre adresse IP, le type de navigateur, le système
          d'exploitation, les URL de référence et vos interactions avec notre
          site web.
        </p>
        <h2>2. Utilisation des Informations</h2>
        <h3>2.1 Informations Personnelles :</h3>
        <p>Nous pouvons utiliser les informations personnelles que nous collectons pour :</p>
        <ul>
          <li>Traiter et exécuter vos commandes</li>
          <li>Fournir un support client et répondre à vos demandes</li>
          <li>
            Vous envoyer des offres promotionnelles, des newsletters et des
            communications marketing (vous pouvez vous désabonner à tout moment)
          </li>
          <li>Améliorer notre site web, nos produits et nos services</li>
          <li>Personnaliser votre expérience sur notre site web</li>
          <li>
            Prévenir les activités frauduleuses et assurer la sécurité de notre
            plateforme
          </li>
        </ul>
        <h3>2.2 Informations Non-Personnelles :</h3>
        <p>
          Nous pouvons utiliser les informations non personnelles à diverses
          fins, notamment :
        </p>
        <ul>
          <li>Analyser les tendances et le comportement des utilisateurs</li>
          <li>Surveiller et améliorer la fonctionnalité de notre site web</li>
          <li>Personnaliser le contenu et les publicités</li>
          <li>Générer des données statistiques agrégées</li>
        </ul>
        <h2>3. Divulgation des Informations</h2>
        <p>
          Nous pouvons divulguer vos informations à des tiers dans les
          circonstances suivantes :
        </p>
        <ul>
          <li>
            À nos prestataires de services de confiance qui nous assistent dans
            nos activités et services
          </li>
          <li>
            Pour se conformer à des obligations légales, faire respecter nos
            politiques ou répondre à des demandes juridiques
          </li>
          <li>
            En cas de fusion, acquisition ou vente d'une partie ou de la
            totalité de nos actifs
          </li>
          <li>Avec votre consentement ou selon vos instructions</li>
        </ul>
        <h2>4. Sécurité</h2>
        <p>
          Nous prenons des mesures raisonnables pour protéger vos informations
          contre tout accès, divulgation, modification ou destruction non
          autorisés. Cependant, veuillez noter qu'aucune méthode de transmission
          sur Internet ou de stockage électronique n'est totalement sécurisée,
          et nous ne pouvons garantir une sécurité absolue.
        </p>
        <h2>5. Confidentialité des Enfants</h2>
        <p>
          Notre site web et nos services ne sont pas destinés aux enfants de
          moins de 13 ans. Nous ne collectons pas intentionnellement
          d'informations personnelles auprès d'enfants. Si nous découvrons que
          nous avons collecté des informations personnelles d'un enfant sans le
          consentement parental, nous prendrons des mesures pour supprimer ces
          informations de nos serveurs.
        </p>
        <h2>6. Modifications de cette Politique de Confidentialité</h2>
        <p>
          Nous pouvons mettre à jour cette Politique de Confidentialité de temps
          à autre. Toute modification sera publiée sur cette page, et la
          Politique révisée prendra effet immédiatement après sa publication.
          Nous vous encourageons à consulter régulièrement cette politique pour
          vous tenir informé des mises à jour.
        </p>
        <h2>7. Nous Contacter</h2>
        <p>
          Si vous avez des questions, des préoccupations ou des suggestions
          concernant cette Politique de Confidentialité, veuillez nous
          contacter à :{" "}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
            }}
          >
           +216 50 55 80 40
          </Link>
        </p>
        <p>
          En utilisant le site web et les services de El Menzah 9, vous acceptez
          la collecte, l'utilisation et la divulgation de vos informations tel
          que décrit dans cette Politique de Confidentialité.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
