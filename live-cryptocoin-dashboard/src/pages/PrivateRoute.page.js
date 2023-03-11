// import { useContext } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { UserContext } from "../contexts/user.context";
 
// // const PrivateRoute = () => {
 
// //  // Fetching the user from the user context.
// //  const { user,isLoading  } = useContext(UserContext);
// //  const location = useLocation();
// //  const redirectLoginUrl = `/login?redirectTo=${encodeURI(location.pathname)}`;
 
// //  // If the user is not logged in we are redirecting them
// //  // to the login page. Otherwise we are letting them to
// //  // continue to the page as per the URL using <Outlet />.
// //  return !user ? <Navigate to={redirectLoginUrl} /> : <Outlet /> ;
// // }
 
// // export default PrivateRoute;

// const PrivateRoute = () => {
//     const { user, isLoading } = useContext(UserContext);
//     const location = useLocation();
//     const redirectLoginUrl = `/login?redirectTo=${encodeURI(location.pathname)}`;
    
//     // Check if the user is logged in and if the user context is done loading
//     if (isLoading) {
//       return <div>Loading...</div>; // or any other loading component you want to use
//     }
//     if (!user) {
//       return <Navigate to={redirectLoginUrl} />;
//     }
    
//     return <Outlet />;
//   };
//   export default PrivateRoute;

import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
 
const PrivateRoute = () => {
 
 // Fetching the user from the user context.
 const { user } = useContext(UserContext);
 const location = useLocation();
 const redirectLoginUrl = `/login?redirectTo=${encodeURI(location.pathname)}`;
 
 // If the user is not logged in we are redirecting them
 // to the login page. Otherwise we are letting them to
 // continue to the page as per the URL using <Outlet />.
 return !user ? <Navigate to={redirectLoginUrl} /> : <Outlet /> ;
}
 
export default PrivateRoute;