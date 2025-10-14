import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "./Layout"
import Home from "./pages/Home"
import Subject from "./pages/Subject"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/subject/:id" element={<Subject />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
