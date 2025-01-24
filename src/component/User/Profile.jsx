import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ExitToApp as LogoutIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { useAlert } from "react-alert";

const ProfilePage = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useSelector((state) => state.userData);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Déconnexion réussie");
    history.push("/login");
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  const createdAt = (user) => {
    const createdAt = new Date(user.createdAt);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Europe/Paris",
    };

    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    const formattedDate = formatter.format(createdAt);
    return formattedDate;
  };

  return (
    <div className="rootProfile">
      <div className="header-root">
        <Typography variant="h5" component="h1" className="headingProfile">
          Bonjour, <strong>{user.name} !</strong>
        </Typography>

       
      </div>

      <div className="profileConatiner">
        <div className="leftCotainer">
          <h4 className="profileHeadingLeft">Aperçu du Profil</h4>
          <div className="profileSection">
            <Avatar
              alt={user.name}
              src={user.avatar.url}
              className="profileAvatar"
            />
            <div className="leftDetails">
              <Typography className="profileText">
                <h5 className="profileSubHeading">Nom :</h5>
                {user.name}
              </Typography>
              <Typography className="profileText">
                <h5 className="profileSubHeading">Email :</h5>
                {user.email}
              </Typography>
              <Typography className="profileText">
                <h5 className="profileSubHeading">Membre depuis :</h5>
                {createdAt(user)}
              </Typography>
            </div>
          </div>

         {/* <div className="myOrder">
            <Typography variant="h4" component="h1" className="profileHeading">
              Commandes
            </Typography>
            <Link
              to="/orders"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button variant="contained" className="ordersButton">
                Voir Commandes
              </Button>
            </Link>
          </div>
          */} 
        </div>

        <div className="rightConatiner">
          <div className="righHeadings">
            <Typography variant="h4" component="h1" className="profileHeading">
              Informations Personnelles
            </Typography>
            <Typography className="profileText2">
              Vous pouvez modifier vos informations personnelles ci-dessous pour
              garder votre compte à jour.
            </Typography>
          </div>
          <div className="profileDetials">
            <div className="detials">
              <Typography
                variant="h4"
                component="h1"
                className="profileHeading"
              >
                MES INFORMATIONS
              </Typography>
              <Typography className="profileText">{user.name}</Typography>
              <Typography className="profileText">EMAIL UTILISATEUR</Typography>
              <Typography className="profileText">NUMÉRO DE TÉLÉPHONE</Typography>
              <Typography className="profileText">GENRE</Typography>
            </div>

            <Link to="/profile/update" style={{ textDecoration: "none" }}>
              <Button variant="contained" className="profileButton">
                MODIFIER LES DÉTAILS
              </Button>
            </Link>
            <div className="detials">
              <Typography
                variant="h4"
                component="h1"
                className="profileHeading"
                style={{ marginTop: "1.5rem" }}
              >
                DÉTAILS DE CONNEXION
              </Typography>
              <Typography className="profileSubHeading">EMAIL</Typography>
              <Typography className="profileText">{user.email}</Typography>

              <Typography
                className="profileSubHeading"
                style={{ marginTop: "10px" }}
              >
                MOT DE PASSE
              </Typography>
              <Typography className="profileSubHeading">
                *************
              </Typography>
            </div>
            <Link
              to="/password/update"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button variant="contained" className="profileButton">
                METTRE À JOUR LE MOT DE PASSE
              </Button>
            </Link>

            <div className="mangeAccount">
              {/*  <Typography
                variant="h4"
                component="h1"
                className="profileHeading"
              >
                Déconnexion de tous les appareils
              </Typography>

            <p className="profileText3">
                Pour accéder à nouveau au site, vous devrez saisir vos
                identifiants. Cette action vous déconnectera de tous les autres
                navigateurs.
              </p> 
              */}
            </div>
            {/* 
            <Button
              variant="contained"
              color="primary"
              className="profileButton"
              startIcon={<LogoutIcon />}
              onClick={logoutHandler}
            >
              Se Déconnecter
            </Button>
             */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
