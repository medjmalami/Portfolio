import { Routes, Route } from "react-router-dom"
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  )
}

export default App
