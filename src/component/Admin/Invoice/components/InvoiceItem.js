import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiTrash } from "react-icons/bi";
import useStyles from "../../../User/LoginFromStyle";
import FormControl from '@mui/material/FormControl';
import EditableField from './EditableField';
import Loader from "../../../layouts/loader/Loader";
import { useSelector, useDispatch } from "react-redux";
 

const InvoiceItem = ({ onItemizedItemEdit, currency, onRowDel, onRowAdd, items }) => {
 

  // Fetch products from the backend
  const { loading, error, products } = useSelector((state) => state.products);

 {/* useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); */ }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="text-danger">Error: {error}</div>
      ) : (
        <Table bordered  responsive className="text-center">
          <thead>
            <tr>
              <th>Article</th>
              <th>Qu.</th>
              <th>P.U</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <ItemRow
                key={item.id}
                index={index}
                onItemizedItemEdit={onItemizedItemEdit}
                item={item}
                products={products}
                onDelEvent={onRowDel}
                currency={currency}
              />
            ))}
          </tbody>
        </Table>
      )}
      <Button
        className="d-block w-20 rounded-50"
        style={{
          backgroundColor: "#ed1c24",
          color: "white",
          width: "fit-content !important",
          padding: "0.8rem 2rem !important",
          borderRadius: "15px",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#000000";
          e.target.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#ed1c24";
          e.target.style.color = "white";
        }}
        onClick={onRowAdd}
      >
        Ajouter Article
      </Button>
    </div>
  );
};

const ItemRow = ({ onItemizedItemEdit, item, index, products, onDelEvent, currency }) => {
  const handleDelete = () => onDelEvent(index);

  // Handler to update the unit price based on selected product
  const handleProductSelect = (e) => {
    const selectedProduct = products.find((product) => product.name === e.target.value);
    if (selectedProduct) {
      onItemizedItemEdit(item.id, "name", selectedProduct.name); // Update name
      onItemizedItemEdit(item.id, "price", selectedProduct.price); // Update price
    }
  };

  return (
    <tr>
      <td style={{ width: '100%' }}>
        {/* Select for product name */}
        <FormControl fullWidth>
          <select
            className="form-select"
            value={item.name || ""}
            id={item.id}
            onChange={handleProductSelect}
            required
          >
            {/* Default option */}
            <option value="" disabled>
              Choisir un article
            </option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </FormControl>
      </td>
      <td style={{ minWidth: '70px' }}>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            type: "number",
            name: "quantity",
            min: 1,
            step: "1",
            value: item.quantity,
            id: item.id,
          }}
        />
      </td>
      <td style={{ minWidth: '100px' }}>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            leading: currency,
            type: "number",
            name: "price",
            min: 1,
            step: "0.01",
            precision: 2,
            textAlign: "text-end",
            value: item.price,
            id: item.id,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: '30px' }}>
        <BiTrash
          onClick={handleDelete}
          style={{ height: '33px', width: '33px', padding: '7.5px' }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

export default InvoiceItem;
