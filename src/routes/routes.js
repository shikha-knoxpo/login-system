import Login from '../components/Login';
import Register from "../components/Register";
import Dashboard from "../components/Dashboard/Detail";
export const routes =  [
    { path: "/login", element: <Login/> },
    {
      path: "/register",
      element: <Register />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
      },
  ];
   
  export default routes;