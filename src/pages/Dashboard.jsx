import DashboardComponent from "../components/Dashboard";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard(props) {
  const navigatetion = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigatetion("/");
    }
  }, []);

  // if (!token) {
  //   return <Navigate to="/" replace />;
  // }

  return <DashboardComponent />;
}

export default Dashboard;
