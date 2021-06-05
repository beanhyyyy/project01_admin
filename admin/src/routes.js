/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Orders from "views/Orders/Orders";
import Products from "views/Products/Products";
// core components/views for RTL layout
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Customer from "views/Customer/Customer";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Settings from "views/Settings/Settings";
import TuneIcon from "@material-ui/icons/Tune";
import AppsIcon from "@material-ui/icons/Apps";
import Integration from "views/Integration/Integration";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: ShoppingBasketIcon,
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: ListAltIcon,
    component: Products,
    layout: "/admin",
  },
  {
    path: "/customer",
    name: "Customer",
    icon: PeopleAltIcon,
    component: Customer,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: TuneIcon,
    component: Settings,
    layout: "/admin",
  },
  {
    path: "/integration",
    name: "Integration",
    icon: AppsIcon,
    component: Integration,
    layout: "/admin",
  },
];

export default dashboardRoutes;
