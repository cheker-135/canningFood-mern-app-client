import React from "react";
import "./Privacy.css";
import MetaData from "../component/layouts/MataData/MataData";

const TermsAndConditions = () => {
  return (
    <div className="privacy-policy-container">
      <MetaData title="Conditions Générales de Vente" />
      <div className="container___">
        <h1>Conditions Générales de Vente</h1>
        <p>
          Merci de faire vos achats chez nous ! Nous apprécions sincèrement votre confiance et votre intérêt pour nos produits. Nous voulons nous assurer que vous avez une excellente expérience d'achat sur notre site, ElMenzah9.com.
        </p>
        <p>
          Comme pour tout achat, certaines conditions s'appliquent. En passant une commande et en achetant un produit sur notre site web, vous acceptez les conditions ci-dessous ainsi que d'autres conditions présentes sur notre site, telles que notre politique de retour, notre politique de confidentialité et nos conditions d'utilisation. Veuillez lire attentivement ces conditions pour être pleinement informé de vos droits et obligations.
        </p>
        <h2>Acceptation des Conditions</h2>
        <p>
          Vous ("Client") pouvez passer des commandes de produits auprès de El Menzah 9 ("nous", "notre") via notre site web. En passant une commande, vous acceptez ces Conditions Générales de Vente ("Conditions") et reconnaissez que nous fournirons les produits conformément à ces conditions. Sauf accord exprès ou écrit de El Menzah 9, toute condition incluse dans une commande ou autre correspondance, incompatible avec ces conditions, sera inapplicable et sans effet.
        </p>
        <h2>Commandes</h2>
        <p>
          Toutes les commandes sont soumises à l'acceptation de El Menzah 9. Cela signifie que nous pouvons, pour quelque raison que ce soit, refuser d'accepter ou annuler une commande, ou limiter une quantité, même si la commande a été confirmée. La réception d'une confirmation de commande ne signifie pas notre acceptation de votre commande, ni une offre de vente. Si nous annulons une commande après que vous ayez été facturé, nous vous rembourserons le montant facturé.
        </p>
        <h2>Offre de Produits</h2>
        <p>
          Toutes les descriptions de produits sur notre site web peuvent être modifiées à tout moment sans préavis, à notre seule discrétion. Nous nous réservons le droit de modifier ou de retirer un produit à tout moment. Nous faisons tout notre possible pour afficher les couleurs et les images des produits de manière précise. Cependant, nous ne pouvons garantir que l'affichage des couleurs sur votre appareil sera fidèle à la réalité.
        </p>
        <h2>Prix</h2>
        <p>
          Tous les prix sont sujets à modification jusqu'à ce que vous passiez votre commande et qu'elle soit acceptée par El Menzah 9. Les prix affichés excluent les frais d'expédition, qui seront calculés et affichés lors de la finalisation de votre achat. Nous nous réservons le droit de corriger toute erreur de prix due à une erreur humaine, un dysfonctionnement informatique ou toute autre raison. En cas d'erreur, nous vous informerons et vous pourrez choisir de ne pas finaliser l'achat.
        </p>
        <h2>Offres Spéciales</h2>
        <p>
          De temps à autre, nous proposons des promotions spéciales sur certains de nos produits, y compris des remises ou des éditions limitées. Ces offres sont valables pour une durée limitée, et nous nous réservons le droit de les modifier ou de les annuler à tout moment.
        </p>
        <h2>Taxes</h2>
        <p>
          Les prix indiqués incluent les taxes applicables. Le client est responsable de tout autre taxe qui pourrait s'appliquer, sauf celles basées sur les revenus de El Menzah 9.
        </p>
        <h2>Paiement</h2>
        <p>
          Toutes les commandes doivent être payées en totalité avant expédition. Les informations de paiement doivent être soumises au moment de la commande. La vérification des informations de paiement et la disponibilité des fonds sont nécessaires pour le traitement de la commande.
        </p>
        <h2>Livraison</h2>
        <p>
          Les options de livraison disponibles seront affichées lors du processus de commande. Les délais de livraison estimés sont donnés à titre indicatif. El Menzah 9 ne peut être tenu responsable des retards de livraison indépendants de notre volonté. En cas de problème, veuillez contacter notre service client.
        </p>
        <h2>Retours</h2>
        <p>
          Les produits peuvent être retournés dans un délai de 30 jours après l'achat pour un remboursement du prix d'achat (hors frais d'expédition). Les frais de retour sont à la charge du client.
        </p>
        <h2>Garantie</h2>
        <p>
          Pour plus d'informations concernant notre politique de garantie, veuillez consulter la garantie écrite incluse avec le produit.
        </p>
        <h2>Non-Revente</h2>
        <p>
          Les produits vendus sur notre site sont destinés à une utilisation personnelle et non à la revente. Nous nous réservons le droit de refuser ou d'annuler toute commande suspectée de revente.
        </p>
        <h2>Droit Applicable</h2>
        <p>
          Ces conditions sont régies par les lois de la Tunisie. Tout litige sera soumis à la juridiction exclusive des tribunaux tunisiens.
        </p>
        <h2>Contact</h2>
        <p>
          Si vous avez des questions sur ces Conditions Générales de Vente, veuillez nous contacter à :
        </p>
        <p style={{ fontWeight: "500" }}>El Menzah 9</p>
        <p style={{ fontWeight: "500" }}>123 Rue Principale, Tunis, Tunisie</p>
        <p style={{ fontWeight: "500" }}>
          Email : <span style={{ fontWeight: "400" }}>info@elmenzah9.com</span>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
