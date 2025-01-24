import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { DataGrid, GridCellParams } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBookings, clearErrors, deleteBooking } from "../../actions/bookingAction";
import { useAlert } from "react-alert";
import { useHistory, } from "react-router-dom";

import MetaData from "../layouts/MataData/MataData";
import Loader from "../layouts/loader/Loader";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Sidebar from "./Siderbar";
import Navbar from "./Navbar";
import { DELETE_BOOKING_RESET,DELETE_BOOKING_SUCCESS } from "../../constants/bookingConstant";
import { Tooltip, Paper } from "@material-ui/core";

function BookingList() {
  const dispatch = useDispatch();
  const history = useHistory();

  const alert = useAlert();

  const { error, loading, reservations } = useSelector((state) => state.allBookings);
  const { error: deleteError, isDeleted } = useSelector((state) => state.deleteUpdateBooking);
  const [toggle, setToggle] = useState(false);

  // Toggle handler
  const toggleHandler = () => {
  
    setToggle(!toggle);
  };

  // To close the sidebar when the screen size is greater than 1000px
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

  // Dispatching the action
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
      alert.success("Reservation supprimée avec succés !!");
     
      dispatch({ type: DELETE_BOOKING_RESET });
      history.push("/admin/bookings");
    }
    dispatch(getAllBookings());
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch,  alert,history, isDeleted, deleteError]);

  // Delete order handler
  const deleteBookingHandler = (dbId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette réservation ?")) {
         dispatch(deleteBooking(dbId));
       }
  };
  

  // DATA GRID VALUE
  const columns = [
    {
      field: "id",
      headerName: "ID Reservation",
      minWidth: 100,
      flex: 1,
      headerClassName: "column-header",
      renderCell: (params) => (
        <Tooltip 
          title={params.value ? String(params.value) : ""} 
          placement="top"
          enterDelay={100}
          classes={{ tooltip: 'customTooltip' }}
        >
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
    {
      field: "name",
      headerName: "Nom Client",
      minWidth: 250,
      flex: 1,
      headerClassName: "column-header hide-on-mobile",
      renderCell: (params) => (
        <Tooltip 
          title={params.value ? String(params.value) : ""} 
          placement="top"
          enterDelay={100}
          classes={{ tooltip: 'customTooltip' }}
        >
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
    {
      field: "phone",
      headerName: "Tel",
      minWidth: 200,
      flex: 1,
      headerClassName: "column-header hide-on-mobile",
      renderCell: (params) => (
        <Tooltip 
          title={params.value ? String(params.value) : ""} 
          placement="top"
          enterDelay={100}
          classes={{ tooltip: 'customTooltip' }}
        >
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 120,
      flex: 1,
      headerClassName: "column-header hide-on-mobile",
      renderCell: (params) => (
        <Tooltip 
          title={params.value ? String(params.value) : ""} 
          placement="top"
          enterDelay={100}
          classes={{ tooltip: 'customTooltip' }}
        >
          <span>{params.value}</span>
        </Tooltip>
      ),
    },



     
    {
      field: "date",
      headerName: "Date",
      minWidth: 200,
      flex: 1,
      headerClassName: "column-header hide-on-mobile",
      renderCell: (params) => (
        <Tooltip 
          title={params.value ? String(params.value) : ""} 
          placement="top"
          enterDelay={100}
          classes={{ tooltip: 'customTooltip' }}
        >
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
    {
      field: "time",
      headerName: "Horaire",
      minWidth: 200,
      flex: 1,
      headerClassName: "column-header hide-on-mobile",
      renderCell: (params) => (
        <Tooltip 
          title={params.value ? String(params.value) : ""} 
          placement="top"
          enterDelay={100}
          classes={{ tooltip: 'customTooltip' }}
        >
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
    {
      field: "message",
      headerName: "Message",
      minWidth: 200,
      flex: 1,
      headerClassName: "column-header hide-on-mobile",
      renderCell: (params) => (
        <Tooltip 
          title={params.value ? String(params.value) : ""} 
          placement="top"
          enterDelay={100}
          classes={{ tooltip: 'customTooltip' }}
        >
          <span>{params.value}</span>
        </Tooltip>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex:  1,
      sortable: false,
      minWidth: 230,
      headerClassName: "column-header1",
      renderCell: (params) => {
        return (
          <>
           {/*  <Link to={`/admin/order/${params.row.dbId}` }
           
             style={{ marginLeft: "0rem" }
          }>
              <EditIcon className="icon-" />
            </Link>
            */}
            <Link onClick={() => deleteBookingHandler(params.getValue(params.id, 'dbId'))}
            
            style={{ marginLeft: "1rem" } }>
              <DeleteIcon className="iconbtn" />
            </Link>
          </>
        );
      },
    },
    
   
  ];

  const rows = [];
  let counter = 1; // Start counter at 1
reservations && reservations.forEach((item) => {
  const dateObj = new Date(item.date);
  const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}-${(dateObj.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${dateObj.getFullYear()}`;

  rows.push({
    id: counter++, // Counter for UI display
    dbId: item._id, // Database ID for deletion
    name: item.name,
    phone: item.phone,
    email: item.email,
    service: item.service,
    date: formattedDate,
    time: item.time,
    message: item.message,
  });
});


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`Reservations - Admin`} />

          <div className="product-list" style={{ marginTop: 0 }}>
            <div className={!toggle ? "listSidebar" : "toggleBox"}>
              <Sidebar />
            </div>

            <div className="list-table">
              <Navbar toggleHandler={toggleHandler} />
              <div className="productListContainer">
                <h4 id="productListHeading">Réservations</h4>

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

export default BookingList;