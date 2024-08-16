import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "@/context/auth";


const ProtectedRoutes = () => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:noteId" element={<Edit />} />
            <Route path="/open/:noteId" element={<Open />} />
        </Routes>
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoutes;
