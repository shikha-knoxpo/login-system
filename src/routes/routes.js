import Login from '../components/Login';
import Register from "../components/Register";
export const routes =  [
    { path: "/login", element: <Login/> },
    {
      path: "/register",
      element: <Register />,
    },
  ];
   
  export default routes;