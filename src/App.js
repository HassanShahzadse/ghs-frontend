import React from "react";
import Sidebar from "./components/sidebar";
import './components/footer.css';
 import { HomePage } from "./pages/homepage";
import Footer from "./components/footer";
import { AboutUs } from "./pages/AboutUs";
import Header from "./components/Header";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        {/* <SearchComponent /> */}
        <HomePage />
        <AboutUs />     
      </div>
      <Footer />
    </div>
  );
}
export default App;