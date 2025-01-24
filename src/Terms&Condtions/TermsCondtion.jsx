import React from "react";
import "./TermsAndCondtion.css";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/logo1.jpeg";

const TermsAndConditionsPage = () => {
  return (
    <div className="terms-container">
      <MetaData title="Conditions Générales" />
      <img
        src={TermsImage}
        alt="Conditions Générales"
        className="terms-image"
      />
      <div className="terms-overlay">
        <h1 className="terms-title">CONDITIONS GÉNÉRALES</h1>
      </div>
      <div className="terms-content">
        <p>
          Merci de choisir El Menzah 9 pour vos besoins en produits alimentaires. 
          Nous apprécions votre confiance et souhaitons vous offrir la meilleure expérience possible lors de vos achats sur notre site.
        </p>
        <p>
          En passant une commande et en achetant un produit sur notre site, vous acceptez les présentes conditions générales, 
          ainsi que nos politiques de retour, de garantie et de confidentialité. Veuillez lire attentivement ces conditions afin de bien comprendre vos droits et obligations.
        </p>
        <h2>Acceptation des Conditions</h2>
        <p>
          Vous ("Client") pouvez passer des commandes de produits auprès d'El Menzah 9 ("nous", "notre") via notre site web. 
          En passant une commande, vous acceptez ces conditions générales et reconnaissez que les produits vous seront fournis conformément à celles-ci. 
          Toute condition contraire mentionnée dans une commande ou autre document sera nulle, sauf accord écrit de notre part.
        </p>
        <h2>Commandes</h2>
        <p>
          Toutes les commandes sont soumises à l'approbation d'El Menzah 9. Nous nous réservons le droit de refuser, annuler ou limiter toute commande, 
          même après confirmation. Si une commande est annulée après un paiement, nous vous rembourserons intégralement.
        </p>
        <h2>Offre de Produits</h2>
        <p>
          Les descriptions des produits sur notre site peuvent être modifiées à tout moment. 
          Nous nous efforçons de représenter fidèlement les couleurs et images des produits, mais des variations peuvent survenir selon les écrans.
        </p>
        <h2>Prix</h2>
        <p>
          Les prix affichés sur le site excluent les frais de livraison, qui seront calculés lors de la validation de votre commande. 
          Nous nous réservons le droit de corriger toute erreur de prix avant la confirmation de votre commande.
        </p>
        <h2>Offres Spéciales</h2>
        <p>
          Nous proposons occasionnellement des promotions, comme des remises ou des éditions limitées. Ces offres peuvent être modifiées ou arrêtées à tout moment.
        </p>
        <h2>Taxes</h2>
        <p>
          Les prix incluent toutes les taxes applicables en Tunisie. Si des taxes supplémentaires sont dues, elles seront indiquées lors du processus de commande.
        </p>
        <h2>Paiement</h2>
        <p>
          Toutes les commandes doivent être payées intégralement avant expédition. Nous acceptons les paiements par carte bancaire (MasterCard, Visa).
        </p>
        <h2>Livraison</h2>
        <p>
          Les options de livraison disponibles vous seront proposées lors de la commande. 
          Les délais de livraison sont des estimations, et nous ne pouvons garantir des dates précises. En cas de retard, veuillez contacter notre service client.
        </p>
        <h2>Retours</h2>
        <p>
          Les produits peuvent être retournés dans un délai de 30 jours après l'achat, sous réserve qu'ils soient dans leur état d'origine. 
          Les frais de retour sont à la charge du client.
        </p>
        <h2>Garantie</h2>
        <p>
          Pour les informations de garantie, veuillez consulter la page dédiée sur notre site ou le document inclus avec le produit.
        </p>
        <h2>Utilisation Non Commerciale</h2>
        <p>
          Les produits vendus sur notre site sont destinés à un usage personnel uniquement. Toute revente est strictement interdite.
        </p>
        <h2>Droit Applicable</h2>
        <p>
          Ces conditions sont régies par les lois de la Tunisie. Tout litige sera soumis à la juridiction des tribunaux tunisiens.
        </p>
        <h2>Indemnisation</h2>
        <p>
          Vous acceptez d'indemniser El Menzah 9 pour tout dommage ou frais résultant de la violation de ces conditions par vous ou par toute personne utilisant votre compte.
        </p>
        <h2>Accord Complet</h2>
        <p>
          Ces conditions constituent l'intégralité de l'accord entre El Menzah 9 et le client, remplaçant tout accord antérieur.
        </p>
        <h2>Clause de Divisibilité</h2>
        <p>
          Si une disposition des présentes est jugée invalide, les autres dispositions resteront en vigueur.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
