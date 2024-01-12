import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const isAuthenticated = (user) => {

    return user ? true : false;
}



export const ProtectedRoute = ({ path, element }) => {
    const user = useSelector(state => state.user)


    return isAuthenticated(user) ? (

        element

    ) : (
        <Navigate to="/login" />
    );
};