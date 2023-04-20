import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";

function PraivetRoute({ children }) {
    const { user, loading } = useContext(AuthProvider);
    const location = useLocation()

    if (loading) {
        return <p>........Loading.</p>
    }
    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace />
}

export default PraivetRoute;