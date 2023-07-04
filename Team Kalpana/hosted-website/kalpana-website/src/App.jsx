import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Home, Team, Achievements, Blogs, Sponsors } from "./Pages";
import BlogArticle from "./Pages/Blogs/BlogArticle";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:id" element={<BlogArticle />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="*" element={<Navigate to="/" replace={true} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}