import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import PropTypes from 'prop-types';


const PrivetRoute = ({children}) => {
  const {user,loading}=useContext(AuthContext)

  if (loading) {
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
  }

  if(user?.email){
    return children
  }
  return (
    <div>
      
    </div>
  );
};
PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivetRoute;
