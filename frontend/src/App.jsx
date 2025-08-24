// import { Link } from "react-router-dom";
// import Navbar from "./components/Navbar";

// export default function Navbar() {
//     return (
//         <nav style={style.navbar}>
//             <h2 style={style.logo}>Career Connect</h2>
//             <div>
//                 <Link to='/' style={style.link}>Home</Link>
//                 <Link to='/register' style={style.link}>Register</Link>
//                 <Link to='/login' style={style.link}>Login</Link>
//             </div>
//         </nav>
//     );
// }

// const style = {
//     navbar: {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px 20px",
//         backgroundColor: "#282c34",
//         color: "white"
//     },
//     logo: {
//         margin: 0
//     },
//     link: {
//         color: "white",
//         marginLeft: "15px",
//         textDecoration: "none"
//     }
// };
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
