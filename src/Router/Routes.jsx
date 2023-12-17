import { createBrowserRouter } from "react-router-dom";
import RksRoot from "../RksRoot";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Portfolio from "../Pages/Portfolio";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import UserDetails from "../Pages/UserDetails";
import Orderhistory from "../Pages/Orderhistory";
import ViewDetails from "../Pages/ViewDetails";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RksRoot />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
        loader : () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path : "/viewdetails/:id",
        element : <ViewDetails/>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      },
      {
        path: "/service",
        element: <Services/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/userdetails",
        element: <UserDetails/>,
        
      },
      {
        path: "orderhistory",
        element: <Orderhistory/>
      },
    ],

  },
  
]);

export default routes;
