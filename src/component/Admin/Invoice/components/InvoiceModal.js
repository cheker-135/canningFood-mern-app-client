import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Loader from "../../../layouts/loader/Loader";
import html2canvas from "html2canvas";
import axiosInstance from '../../../../axiosConfig';

import jsPDF from "jspdf";
import logo from "../../../../Image/logo2.jpeg";
import "./InvoiceModal.css";

function GenerateInvoice() {
  html2canvas(document.querySelector("#invoiceCapture"), {
    scale: 10,
    useCORS: true,
    scrollX: 0,
    scrollY: -window.pageYOffset,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [105, 148],
    });

    const pdfWidth = 105;
    const pdfHeight = 148;

    pdf.setDrawColor(0);
    pdf.setLineWidth(1);
    pdf.rect(0, 0, pdfWidth, pdfHeight);

    const padding = 1;
    pdf.addImage(
      imgData,
      "PNG",
      padding,
      padding,
      pdfWidth - 2 * padding,
      pdfHeight - 2 * padding
    );

    pdf.save("invoice-001.pdf");
  });
}

async function sendInvoiceEmailDirect(email, invoiceData, setLoading, setAlert) {
  if (!email) {
    alert("Customer email is missing!");
    return;
  }

  setLoading(true); // Show loader
  try {
    const response = await axiosInstance.post(
      "/api/v1/invoices/send-email",
      {
        email: email,
        invoiceData: invoiceData,
      },
      {
        headers: {
          "Content-Type": "application/json", // Specify content type
         
        },
      }
    );

    if (response.status === 200) {
      setAlert({ type: "success", message: "Reçu envoyé avec succès!" });
    } else {
      setAlert({ type: "error", message: "Une erreur s'est produite." });
    }
  } catch (error) {
    setAlert({ type: "error", message: "Une erreur s'est produite." });
  } finally {
    setLoading(false); // Hide loader
  }
}


function InvoiceModal({
  showModal,
  closeModal,
  info,
  items,
  currency,
  total,
  resteAPayer,
  paye,
}) {
  const [loading, setLoading] = useState(false); // Loader state
  const [alert, setAlert] = useState(null); // Alert state

  const invoiceData = {
    name: info.billTo,
    phoneNumber: info.billToPhone,
    email: info.billToEmail,
    notes: info.notes,
    items: items.map((item) => ({
      itemName: item.name,
      quantity: item.quantity,
      unitPrice: item.price,
    })),
    dueDate: info.dateRecup,
    issuedDate: info.dateOfIssue,
    totalAmount: total,
    invoiceNumber: info.invoiceNumber,
    paye: paye,
    resteAPayer: resteAPayer,
  };

  return (
    <div>
      <Modal show={showModal} onHide={closeModal} size="sm" centered>
        <Modal.Body
          style={{
            border: "1px solid black",
            borderRadius: "0.3rem",
            padding: "1rem",
            marginTop: "3rem",
          }}
        >
          {loading && <Loader className="loader" />} {/* Show loader when loading */}
          {alert && (
            <div
              className={`alert ${
                alert.type === "success" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {alert.message}
            </div>
          )}
          <div id="invoiceCapture" className="container-fluid bordered p-0 m-0">
            <div className="row border bg-light text-start">
              <div className="col-12 py-2" style={{ position: "relative" }}>
                <div className="d-flex align-items-center"
                  style={{ flexDirection: "column", justifyContent: "flex-start" }}
                  >
                  <img
                    src={logo}
                    alt="Conserverie Menzah 9 logo"
                    style={{
                      width: "100px",
                      height: "70px",
                      marginRight: "20px",
                      borderRadius: "0.3rem",
                    }}
                  />
                  <h4
                    className="mt-2 mb-0 "
                    style={{ fontFamily: "Brush Script MT, cursive" }}
                  >
                    {info.billFrom || "Conserverie Menzah 9"}
                  </h4>
               
                <h5
                  className="mt-2 mb-0 "
                  style={{ fontFamily: "Brush Script MT, cursive" }}
                >
                  Tel: {info.billFromPhone || "50 55 80 40"}
                </h5>
                <span
  className="mt-2 mb-0"
  style={{
    fontWeight: "bold",
    fontFamily: "Brush Script MT, cursive", // Beautiful font family
    fontSize: "24px", // Adjusted font size for better visibility
    color: "#333", // Dark gray color for text
    paddingBottom: "1px", // Space between text and the border
    borderBottom: "3px solid #333", // Thicker and more pronounced border
    display: "inline-block", // Ensures proper spacing and alignment
    textAlign: "center", // Centers the text if needed
  }}
>
  Reçu
</span>


                </div>
               
              </div>
              
            </div>
            <div className="row border">
              <div className="col-12 py-2">
                <Table
                  bordered
                  hover
                  size="sm"
                  variant="light"
                  className="mb-0 small custom-border"
                >
                  <tbody>
                    <tr>
                      <td>
                        <strong>Nom Client:</strong>
                      </td>
                      <td>{info.billTo || ""}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Tel:</strong>
                      </td>
                      <td>{info.billToPhone || ""}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Code commande:</strong>
                      </td>
                      <td>{info.invoiceNumber || ""}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date de remplissage:</strong>
                      </td>
                      <td>{info.dateOfIssue || ""}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date de récupération:</strong>
                      </td>
                      <td>{info.dateRecup || ""}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <Table
              bordered
              hover
              size="sm"
              variant="light"
              className="col-12  py-2 mb-0 small custom-border"
            >
              <thead>
                <tr>
                  <th>Article</th>
                  <th>P.U.</th>
                  <th>Qté</th>
                  <th>P.T.</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>
                      {item.price} {currency}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {(item.price * item.quantity).toFixed(1)} {currency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Table
              bordered
              hover
              size="sm"
              variant="light"
              className="mb-0 small custom-border"
            >
              <tbody>
                <tr>
                  <td>
                    <strong>Prix Total:</strong>
                  </td>
                  <td>
                    {total} {currency}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Payé:</strong>
                  </td>
                  <td>
                    {paye} {currency}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Reste à payer:</strong>
                  </td>
                  <td>
                    {resteAPayer} {currency}
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="col-12 py-2">
              <div className="d-flex align-items-center">
                <h6
                  className="mb-0 mt-2"
                  style={{
                    fontFamily: "Comic Sans MS, cursive",
                    fontSize: "0.8rem",
                  }}
                >
                  {info.notes || "Nous Vous Remercions De Votre Confiance!"}
                </h6>
              </div>
            </div>
          </div>
          <div className="pb-4 px-2">
            <Row>
              <Col md={6}>
                <Button
                  variant="outline-primary"
                  className="d-block w-100 mt-3 rounded-40"
                  onClick={GenerateInvoice}
                >
                  Télécharger sur PC
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  variant="outline-success"
                  className="d-block w-100 mt-3 rounded-40"
                  onClick={() =>
                    sendInvoiceEmailDirect(
                      info.billToEmail,
                      invoiceData,
                      setLoading,
                      setAlert
                    )
                  }
                >
                  Envoyer via Email
                </Button>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InvoiceModal;
