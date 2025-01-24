import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getAdminFoods,
  deleteFood,
} from "../../actions/foodAction";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert"; 

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MetaData from "../layouts/MataData/MataData";
import Loader from "../layouts/loader/Loader";
import Sidebar from "./Siderbar";
import Navbar from "./Navbar";
import { DELETE_FOOD_RESET } from "../../constants/foodConstants";

function  FoodList() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  const { error, foods, loading } = useSelector((state) => state.foods);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteUpdateFood
  );

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
      alert.success("Plat supprimé avec succès");
      dispatch({ type: DELETE_FOOD_RESET });
    }
    dispatch(getAdminFoods());
  }, [dispatch, error, alert, deleteError, isDeleted]);

  const deleteFoodHandler = (dbId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce plat ?")) {
      dispatch(deleteFood(dbId));
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID du plat",
      minWidth: 150,
      flex: 0.5,
      headerClassName: "column-header",
    },
    {
      field: "name",
      headerName: "Nom",
      minWidth: 250,
      flex: 0.5,
      headerClassName: "column-header hide-on-mobile",
    },
   
    {
      field: "poids",
      headerName: "Poids",
      type: "number",
      minWidth: 200,
      flex: 0.5,
      headerClassName: "column-header hide-on-mobile",
    },
    {
      field: "description",
      headerName: "Description",
      type: "number",
      minWidth: 200,
      flex: 0.5,
      headerClassName: "column-header hide-on-mobile",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      minWidth: 230,
      headerClassName: "column-header1",
      renderCell: (params) => {
        return (
          <>
            <Link
              to={`/admin/food/${params.getValue(params.id, 'dbId')}`}
              style={{ marginLeft: "1rem" }}
            >
              <EditIcon className="icon-" />
            </Link>

            <div
              onClick={() => deleteFoodHandler(params.getValue(params.id, 'dbId'))}
            >
              <DeleteIcon className="iconbtn" />
            </div>
          </>
        );
      },
    },
  ];

  const rows = [];
  let counter = 1; 
  foods &&
    foods.forEach((item) => {
      rows.push({
        id: counter++,
        dbId: item._id, // Database ID for deletion
        
        
        name: item.name,
        poids: item.poids,
        description: item.description,
      });
    });

  const toggleHandler = () => {
    setToggle(!toggle);
  };

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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`TOUS LES PLATS - Admin`} />

          <div className="product-list" style={{ marginTop: 0 }}>
            <div className={!toggle ? "listSidebar" : "toggleBox"}>
              <Sidebar />
            </div>

            <div className="list-table">
              <Navbar toggleHandler={toggleHandler} />
              <div className="productListContainer">
                <h4 id="productListHeading">TOUS LES PLATS</h4>

                <DataGrid
                  rows={rows}
                  columns={columns}
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

export default FoodList;