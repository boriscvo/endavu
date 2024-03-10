import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Assets } from "./components/pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Assets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
