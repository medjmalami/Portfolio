import { Routes, Route, Navigate } from "react-router-dom"
import Portfolio from "./pages/Portfolio"
import { LanguageRedirect } from "./components/language-redirect"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LanguageRedirect />} />
      <Route path="/en" element={<Portfolio />} />
      <Route path="/fr" element={<Portfolio />} />
      <Route path="/ar" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
