import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomeConsorcio } from "./pages/HomeConsorcioFixed";
import { VehicleConsorcio } from "./pages/VehicleConsorcio";
import { ThankYou } from "./pages/ThankYou";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <main className="flex-grow">
          <Routes>
            <Route path="/imoveis" element={<HomeConsorcio />} />
            <Route path="/veiculos" element={<VehicleConsorcio />} />
            <Route path="/obrigado" element={<ThankYou />} />
            <Route path="/" element={<Navigate to="/imoveis" replace />} />
          </Routes>
        </main>
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
