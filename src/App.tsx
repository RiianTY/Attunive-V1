import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ContactForm from "@/pages/contact";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ContactForm />} path="/contact" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
