import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProjectPage from "./pages/ProjectPage"
import Qualifications from "./sections/Qualifications"

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/qualifications" element={<Qualifications />} />
      </Routes>
    </div>
  )
}