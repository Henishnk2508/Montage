import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ConfiguratorLayout from "./layouts/ConfiguratorLayout";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import PortfolioLayout from "./layouts/PortfolioLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/portfolio"
          element={
            <ProtectedRoute>
              <PortfolioLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/design"
          element={
            <ProtectedRoute>
              <ConfiguratorLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
