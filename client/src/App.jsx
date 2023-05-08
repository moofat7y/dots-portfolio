import "./scss/app.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import Loading from "./pages/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
