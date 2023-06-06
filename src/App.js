import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import './App.css';
import Layout from "./components/Layout/Layout";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ServicesList from "./pages/ServicesList";
import Post from "./pages/Post";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="adminpage" element={<AdminPage />} />
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Main />} />
                <Route path="*" element={<Main />} />
                <Route path="blog/post" element={<Post />} />
                <Route path="main" element={<Main />}/>
                <Route path="service" element={<Services />}/>
                <Route path="blog" element={<Blog />}/>
                <Route path="about" element={<About />}/>
                <Route path="service/servicelist" element={<ServicesList />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
