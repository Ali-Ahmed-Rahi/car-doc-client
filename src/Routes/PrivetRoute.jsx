import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import PropTypes from 'prop-types';
import { Navigate, useLocation,  } from "react-router-dom";
import Loading from "../components/Loading/Loading";


const PrivetRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext)
  const location=useLocation()
 

  if (loading) {
    return <Loading></Loading>
  }

  if(user?.email){
    return children
  }
  return <Navigate  state={location.pathname} to='/login' replace></Navigate>
};
PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivetRoute;
