import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Button, Form, Card, Container, InputGroup } from "react-bootstrap";
import {
  TextField,
 
  Grid,
 
} from "@mui/material";
import InvoiceItem from "./InvoiceItem";
import InvoiceModal from "./InvoiceModal";
import Navbar from "../../Navbar";
import MetaData from "../../../layouts/MataData/MataData";
import Sidebar from "../../Siderbar";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    gap: "1rem",
   
    padding: 0,
  },
  firstBox: {
    width: "25%",
    backgroundColor: "white",
    top: "80px",
    marginTop: "99px", 
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    display: "block",
    [theme.breakpoints.down("999")]: {
      display: "none",
    },
  },
  toggleBox: {
    position: "absolute",
    top: "80px",
    left: "17px",
    width: "18rem",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    zIndex: 10000, 
  },
  secondBox: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    [theme.breakpoints.down("999")]: {
      width: "100%",
    },
  },
  navBar: {
    position: "fixed", // Makes the navbar fixed at the top
    top: 0,
    left: 20,
    width: "80%",
    zIndex: 10000, // Ensures it's above other components
    backgroundColor: "white", // Optional: to prevent transparency issues
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Optional: adds a subtle shadow
  },
  mainContent: {
    marginTop: "80px", // Adjust based on the height of the navbar
    width: "100%",
  },
}));

const InvoiceForm = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState("dt");
  const [currentDate] = useState(new Date().toLocaleDateString());
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [dateOfIssue, setDateOfIssue] = useState("");
  const [ dateRecup, setDateRecup] = useState("");
 
  const [billTo, setBillTo] = useState("");
  const [billToEmail, setBillToEmail] = useState("");
  const [billToPhone, setBillToPhone] = useState("");
  const [billFrom, setBillFrom] = useState("Conserverie Menzah 9");
  const [billFromEmail, setBillFromEmail] = useState("conserverie.chebbi17@gmail.com");
  const [billFromAddress, setBillFromAddress] = useState(" Rue Hmaid Jbelia Menzah 9C");
  const [notes, setNotes] = useState("Nous Vous Remercions De Votre Confiance!");
  const [total, setTotal] = useState("0.00");
 
 
  const [toggle, setToggle] = useState(false);
  
  const [paye, setPaye] = useState("0.0");
  const [items, setItems] = useState([
    {
      id: 0,
      name: "",
      description: "",
      price: "",
      quantity: "",
    },
  ]);

  useEffect(() => {
    handleCalculateTotal();
  }, [items]);

  const handleRowDel = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleAddEvent = (evt) => {
    evt.preventDefault();
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const newItem = {
      id,
      name: "",
      price: "",
      description: "",
      quantity: "",
    };
    setItems([...items, newItem]);
  };
 

  const handleCalculateTotal = () => {
    const calculatedSubTotal = items.reduce(
      (sum, item) => sum + (parseFloat(item.price) || 0) * (parseInt(item.quantity, 10) || 0),
      0
    );
    setTotal(calculatedSubTotal.toFixed(1));
  };
   // Calcul automatique du montant restant à payer
   const resteAPayer = (parseFloat(total) || 0) - (paye || 0); 


  const onItemizedItemEdit = (id, fieldName, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [fieldName]: value } : item
      )
    );
  };
  
  
  

  const openModal = (event) => {
    event.preventDefault();
    handleCalculateTotal();
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const toggleHandler = () => setToggle(!toggle);

  return (
    <>
      <MetaData title="Recu - Admin " />
      <div className={classes.dashboard}>
        <div className={toggle ? classes.toggleBox : classes.firstBox}>
          <Sidebar />
        </div>
        <div className={classes.secondBox}>
          <div className={classes.navBar}>
            <Navbar toggleHandler={toggleHandler} />
          </div>
          <div className={classes.mainContent}>
            <Container>
              <Form onSubmit={openModal}>
                <Row>
                  <Col md={8} lg={9}>
                    <Card className="p-4 p-xl-5 my-3 my-xl-4">
                      <div className="d-flex flex-column flex-md-row align-items-start justify-content-between mb-3">
                        <div className="d-flex flex-column">
                          <div className="mb-2">
                            <span className="fw-bold">Date de&nbsp;Facture:&nbsp;</span>
                            <span className="current-date">{currentDate}</span>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-1">
                            <span className="fw-bold d-block me-2">Date de&nbsp;Remplissage:</span>
                            <Form.Control
                              type="date"
                              value={dateOfIssue}
                              onChange={(e) => setDateOfIssue(e.target.value)}
                              style={{ maxWidth: "150px" }}
                              required
                            />
                          </div>
                          <div className="d-flex flex-row align-items-center mb-1">
                            <span className="fw-bold d-block me-2">Date de&nbsp;Recuperation:</span>
                            <Form.Control
                              type="date"
                              value={dateRecup}
                              onChange={(e) => setDateRecup(e.target.value)}
                              style={{ maxWidth: "150px" }}
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <span className="fw-bold me-2">N°&nbsp;Facture:&nbsp;</span>
                          <Form.Control
                            type="number"
                            value={invoiceNumber}
                            onChange={(e) => setInvoiceNumber(e.target.value)}
                            min="1"
                            style={{ width: "60px" ,fontSize : "18px" }}
                            required
                           // className="invoice-input"
                          />
                        </div>
                      </div>
                      <hr className="my-4" />
                      <Row className="mb-5">
                        <Col>
                          <Form.Label className="fw-bold">Facturation de:</Form.Label>
                          <Form.Control
                            placeholder="Nom de Conserverie"
                            value={billFrom}
                            onChange={(e) => setBillFrom(e.target.value)}
                            required
                          />
                          <Form.Control
                            placeholder="Telephone:"
                            value={billFromEmail}
                            onChange={(e) => setBillFromEmail(e.target.value)}
                            required
                          />
                          <Form.Control
                            placeholder="Adresse"
                            value={billFromAddress}
                            onChange={(e) => setBillFromAddress(e.target.value)}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Label className="fw-bold">Facturer à:</Form.Label>
                          <Form.Control
                            placeholder="Nom Client"
                            value={billTo}
                            onChange={(e) => setBillTo(e.target.value)}
                            required
                          />
                          <Form.Control
                            placeholder="Adresse Email"
                            value={billToEmail}
                            onChange={(e) => setBillToEmail(e.target.value)}
                            required
                          />
                          <Form.Control
                            placeholder="Numero Telephone"
                            value={billToPhone}
                            onChange={(e) => setBillToPhone(e.target.value)}
                            required
                          />
                        </Col>
                      </Row>
                      <InvoiceItem
                        onItemizedItemEdit={onItemizedItemEdit}
                        onRowAdd={handleAddEvent}
                        onRowDel={handleRowDel}
                        currency={currency}
                        items={items}
                      />
                      <Row className="mt-4 justify-content-end">
                        <Col lg={6}>
                          {/*   <div className="d-flex flex-row align-items-start justify-content-between">
                            <span className="fw-bold">Sous-Total:</span>
                            <span>{subTotal} {currency}</span>
                          </div>
                       <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                            <span className="fw-bold">Remise:</span>
                            <span>
                              <span className="small">({discountRate || 0}%)</span>
                              {discountAmount || 0} {currency}
                            </span>
                          </div>
                          <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                            <span className="fw-bold">Tax:</span>
                            <span>
                              <span className="small">({taxRate || 0}%)</span>
                              {taxAmount || 0} {currency}
                            </span>
                          </div>
                          */}
                          
                          <div
                            className="d-flex flex-row align-items-start justify-content-between"
                            style={{ fontSize: "1.125rem" }}
                          >
                            <span className="fw-bold">Prix Total:</span>
                            <span className="fw-bold">{total || 0} {currency}</span>
                          </div>
                          <hr />
                          <div
                            className="d-flex flex-row align-items-start justify-content-between"
                            style={{ fontSize: "1.125rem" }}
                          >
                            <span className="fw-bold">Payé:</span>
                            
                            <Grid item xs={15}>
                            <Form.Control
                             min="0"
                             step="0.01" 
                             style={{ width: "70px" ,fontSize : "18px" }}
                              className="d-flex flex-row align-items-start justify-content-between"
                             required
                            // className="invoice-input"
                              type="number"
                             variant="outlined"
                           fullWidth
                          value={paye}
                              onChange={(e) =>  setPaye(parseFloat(e.target.value) || 0)}
                              />
                               </Grid>
                          </div>
                          <div
                            className="d-flex flex-row align-items-start justify-content-between"
                            style={{ fontSize: "1.125rem" }}
                          >
                            <span className="fw-bold">Reste à Payer:</span>
                            <span className="fw-bold">{resteAPayer || 0} {currency}</span>
                          </div>
                        </Col>
                      </Row>
                      <hr className="my-4" />
                      <Form.Label className="fw-bold">Notes:</Form.Label>
                      <Form.Control
                        placeholder="Nous Vous Remercions De Votre Confiance!"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        as="textarea"
                        rows={1}
                      />
                    </Card>
                  </Col>
                  <Col md={4} lg={3}>
                    <div className="sticky-top pt-md-3 pt-xl-4">
                    <Button
                   type="submit"
                  className="d-block w-100 rounded-50"
                  style={{
                    backgroundColor: "#000000 ",
                    display: "block",
                    color: "white   ",
                    width: "fit-content     !important",
                    padding: "0.8rem 2rem   !important",
                    borderRadius: "25px ",
                   
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#ed1c24 ";
                    e.target.style.color = "white ";
                    
                    
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor ="#000000 ";
                    e.target.style.color = "white   ";
                  }}
                        >
                 Voir Facture
                   </Button>

                      <InvoiceModal
                        showModal={isOpen}
                        closeModal={closeModal}
                        info={{
                          dateOfIssue,
                          dateRecup,
                          invoiceNumber,
                          billTo,
                          billToEmail,
                          billToPhone,
                          billFrom,
                          billFromEmail,
                          billFromAddress,
                          notes,
                        }}
                        items={items}
                        currency={currency}
                        resteAPayer={resteAPayer}
                        paye={paye}
                        
                        total={total}
                      />
                      <Form.Group className="mb-3 mt-5 ">
                        <Form.Label className="fw-bold">Devise:</Form.Label>
                        <Form.Select
                          onChange={(e) => setCurrency(e.target.value)}
                          className="btn btn-light my-1"
                        >
                          <option value="dt"> TND</option>
                        
                          <option value="€">Eur</option>
                          <option value="$">Dollar</option>
                         
                        </Form.Select>
                      </Form.Group>
                     
                    </div>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceForm;
