import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";
import "./DishCard.css";

const DishCard = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [open, setOpen] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front Side */}
        <div
          className="card-front"
          onClick={handleFlip}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        >
          <img
            src={product.images[0].url}
            alt={product.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <h3 style={{ marginTop: "10px", fontFamily: "'Pacifico', cursive" }}>
            {product.name}
          </h3>
        </div>

        {/* Back Side */}
        <div
          className="card-back"
          onClick={handleFlip}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
          }}
        >
          <p style={{ fontFamily: "Arial, sans-serif", marginBottom: "10px" }}>
            {product.description}
          </p>
          <h4 style={{ marginBottom: "10px" }}>Poids: {product.poids} gr</h4>
          <button
            onClick={handleOpenModal}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff6347",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Commander
          </button>
        </div>
      </ReactCardFlip>

      {/* Modal */}
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Commander</DialogTitle>
        <DialogContent>
          Pour passer une commande, veuillez nous contacter :<br />
          📞 <strong>+216 54 615 080</strong> <br />
          Disponible par téléphone ou via WhatsApp.
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => window.open("https://wa.me/21654615080")}
            color="primary"
          >
            WhatsApp
          </Button>
          <Button onClick={handleCloseModal} color="secondary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DishCard;
