import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Kambaz from "./Kambaz";
import Labs from "./Labs";
export default function App() {
  return (
    <HashRouter>
      <div>
            <Routes>
                <Route path="/" element={<Navigate to="/Kambaz" />} />
                <Route path="/Kambaz/*" element={<Kambaz />} />
                <Route path="/Labs/*" element={<Labs />} />
            </Routes>
      </div>
    </HashRouter>
  );
}
