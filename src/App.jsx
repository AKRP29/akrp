import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Educations from "./pages/Educations";
import Rewards from "./pages/Rewards";
import Activities from "./pages/Activities";
import Hobbies from "./pages/Hobbies";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-100 font-poppins text-gray-800">
        <Navigation />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/educations" element={<Educations />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
