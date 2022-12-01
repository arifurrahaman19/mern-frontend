import "./styles/App.css";
import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("tokenEffect");
    const token = localStorage.getItem("authToken");
    setToken(token);
  }, []);

  console.log("token=>", token);

  return (
    <div className="App">
      <div className="app-wrapper">
        <Routes>
          <Route index path="/" element={<Login token={token} />} />
          <Route path="/dashboard" element={<Dashboard token={token} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
