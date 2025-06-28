import ReactDOM from "react-dom/client"
import Navbar from "./Navbar" // capital N

const root = document.getElementById("react-navbar")
if (root) {
  ReactDOM.createRoot(root).render(<Navbar />)
}