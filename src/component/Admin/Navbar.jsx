import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
    background: "#ffffff",
    borderRadius: "30px",
    border: "1px solid black",
    width: "100%",
    marginBottom:"50px",
    padding: "0.8rem 0rem 0.5rem 0rem",
    boxShadow:
      "1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "top 0.3s ease-in-out",
    position: "fixed", // Fix the navbar
    top: 0, // Keep it at the top
    left: 0,
    right: 0,
   

    [theme.breakpoints.between("999")]: {
      flexDirection: "row",
      alignItems: "center",
      padding: "1rem",
    },
  },

  menuIcon: {
    display: "none",
    [theme.breakpoints.down("999")]: {
      display: "block",
      fontSize: "2rem",
      "& svg": {
        fontSize: "2rem",
        "&:hover": {
          color: "#ed1c24",
        },
      },
      "&:hover": {
        transform: "scale(1.1)", // Hover scale effect
      },
    },
  },
  dashboardHead: {
    fontSize: "2rem",
    fontWeight: 900,
    color: "black",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
    },
    [theme.breakpoints.down("999")]: {
      fontSize: "1.8rem",
      marginBottom: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "1.5rem",
      fontSize: "1.8rem",
    },
  },
  contactButton: {
    padding: "10px 30px",
    borderRadius: "20px",
    boxShadow: "0px 2px 8px 0px #0000000a",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "16px",
    color: "#fff",
    letterSpacing: "1px",
    background: "#414141",
    transition: "background-color 0.3s",
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      padding: "8px 14px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "14px",
      padding: "7px 15px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "&:hover": {
      background: "#ed1c24",
    },
  },
  headerBottom__logo_main: {
    height: "3.9rem",
    width: "5.5rem",
    alignSelf: "center",
    paddingLeft: "0px",
    marginLeft: "10px",
    borderRadius:"20px",
    "& img": {
      height: "100%",
      width: "auto",
     
    },
  },
}));

const Navbar = ({ toggleHandler }) => {
  const classes = useStyles();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={classes.navbar}
      style={{
        boxShadow: isScrolling
          ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
          : "1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <IconButton className={classes.menuIcon} onClick={toggleHandler}>
        <MenuIcon fontSize="2rem" />
      </IconButton>
      <div className={classes.dashboardHead}>
        <Link
          to="/admin/dashboard"
          style={{
            textDecoration: "none",
            color: "none",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={require("../../Image/logo.jpeg")}
            alt="logo"
            className={classes.headerBottom__logo_main}
          />
        </Link>
      </div>
      <Link to="/contact" style={{ textDecoration: "none", color: "none" }}>
        <Button className={classes.contactButton}>Contact</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
