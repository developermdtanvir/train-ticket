import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";

function PraivetRoute({ children }) {
    const { user, loading } = useContext(AuthProvider);

    if (loading) {
        return <p>Loading.........</p>
    }
    if (user) {
        return children;
    }

    return <Navigate to={'/login'} />
}

export default PraivetRoute;