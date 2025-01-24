import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders, clearErrors, deleteOrder } from "../../actions/orderAction";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import MetaData from "../layouts/MataData/MataData";
import Loader from "../layouts/loader/Loader";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Sidebar from "./Siderbar";
import Navbar from "./Navbar";
import { DELETE_ORDER_RESET } from "../../constants/orderConstant";

function ListeCommandes() {
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();

  const { error, loading, orders } = useSelector((state) => state.allOrders);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteUpdateOrder
  );
  const [toggle, setToggle] = useState(false);

  // Gestion du toggle
  const toggleHandler = () => {
    console.log("toggle");
    setToggle(!toggle);
  };

  // Fermer la barre latérale si la largeur de l'écran dépasse 1000px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 999 && toggle) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggle]);

  // Lancer les actions
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      alert.success("Commande supprimée avec succès !");
      history.push("/admin/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }
    dispatch(getAllOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error, alert, isDeleted, deleteError]);

  // Gestion de suppression de commande
  const supprimerCommande = (id) => {
    dispatch(deleteOrder(id));
  };

  // Colonnes pour DataGrid
  const colonnes = [
    {
      field: "id",
      headerName: "ID Commande",
      minWidth: 120,
      flex: 0.7,
      headerClassName: "column-header",
    },
    {
      field: "status",
      headerName: "Statut",
      minWidth: 100,
      flex: 0.8,
      headerClassName: "column-header hide-on-mobile",
      renderCell: (params) => {
        const color = params.value === "Livré" ? "green" : "red";
        return <div style={{ color, fontWeight: 600 }}>{params.value}</div>;
      },
    },
    {
      field: "itemsQty",
      headerName: "Quantité",
      type: "number",
      minWidth: 120,
      flex: 0.8,
      headerClassName: "column-header hide-on-mobile",
    },
    {
      field: "amount",
      headerName: "Montant",
      type: "number",
      minWidth: 120,
      flex: 0.8,
      headerClassName: "column-header hide-on-mobile",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1.5,
      sortable: false,
      minWidth: 150,
      headerClassName: "column-header1",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
              <EditIcon className="icon-" />
            </Link>
            <Link
              onClick={() => supprimerCommande(params.getValue(params.id, "id"))}
            >
              <DeleteIcon className="iconbtn" />
            </Link>
          </>
        );
      },
    },
  ];

  // Lignes pour DataGrid
  const lignes = [];
  orders &&
    orders.forEach((item) => {
      lignes.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        amount: item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`Toutes les commandes - Admin`} />

          <div className="product-list" style={{ marginTop: 0 }}>
            <div className={!toggle ? "listSidebar" : "toggleBox"}>
              <Sidebar />
            </div>

            <div className="list-table">
              <Navbar toggleHandler={toggleHandler} />
              <div className="productListContainer">
                <h4 id="productListHeading">TOUTES LES COMMANDES</h4>

                <DataGrid
                  rows={lignes}
                  columns={colonnes}
                  pageSize={10}
                  disableSelectionOnClick
                  className="productListTable"
                  autoHeight
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ListeCommandes;
