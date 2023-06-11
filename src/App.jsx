import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Home } from "./pages/Home"
import { Character } from "./pages/Character"
import { Header } from "./components/Header"


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route index path="/character/:code" element={<Character/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
  
}

export default App
