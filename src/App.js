import Layout from "./components/layout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Venue from "./pages/venue";
import Login from "./pages/login";
import CreateUser from "./pages/createUser";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createUser" element={<CreateUser />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
