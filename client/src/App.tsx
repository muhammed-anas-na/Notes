import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Createnote from "./Createnote";
import Viewnote from "./Viewnote";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-note"
          element={
            <ProtectedRoute>
              <Createnote />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-note/:noteId"
          element={
            <ProtectedRoute>
              <Viewnote />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
