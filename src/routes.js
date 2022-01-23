import Home from "./pages/home";
import React from "react";
import Wettschein from "./pages/wettscheine";
import Bonus from "./pages/bonus";
import SpielDesTages from "pages/game-of-the-day";
import Donation from "pages/donation";
import Impressum from "pages/impressum";
import UserTipps from "pages/user-tipps";
import SignIn from "pages/sign-in";
import SignUp from "pages/sign-up";
import Profile from "pages/profile";
import CreateUserTipps from "pages/create-user-tipps";
import CreateWettschein from "pages/create-wettschein";
import NotFoundPage from "pages/404";


const routes = [
    {
      type: "collapse",
      name: "Sportwetten Tipps",
      key: "Sportwetten Tipps",
      route: "/",
      component: <Home />,
    },
    {
        type: "collapse",
        name: "wettschein",
        key: "wettschein",
        route: "/wettschein/:type",
        component: <Wettschein />,
    },
    {
      type: "collapse",
      name: "Bonus",
      key: "Bonus",
      route: "/spiel-des-tages",
      component: <SpielDesTages />,
    },
    {
      type: "collapse",
      name: "Bonus",
      key: "dashboard",
      route: "/bonus",
      component: <Bonus />,
    },
    {
      type: "collapse",
      name: "Donation",
      key: "Donation",
      route: "/donation",
      component: <Donation />,
    },
    {
      type: "collapse",
      name: "Impressum",
      key: "Impressum",
      route: "/impressum",
      component: <Impressum />,
    },
    {
      type: "collapse",
      name: "UserTipps",
      key: "UserTipps",
      route: "/user-tipps",
      component: <UserTipps />,
    },
    {
      type: "collapse",
      name: "SignIn",
      key: "SignIn",
      route: "/sign-in",
      component: <SignIn />,
    },
    {
      type: "collapse",
      name: "SignUp",
      key: "SignUp",
      route: "/sign-up",
      component: <SignUp />,
    },
    {
      type: "collapse",
      name: "profile",
      key: "profile",
      route: "/profile",
      component: <Profile />,
    },
    {
      type: "collapse",
      name: "profile",
      key: "profile",
      route: "/create-user-tipps",
      component: <CreateUserTipps />,
    },
    {
      type: "collapse",
      name: "profile",
      key: "profile",
      route: "/create-wettschein",
      component: <CreateWettschein />,
    },
    {
      type: "collapse",
      name: "profile",
      key: "profile",
      route: "/not-found",
      component: <NotFoundPage />,
    },
  ];
  
  export default routes;
  