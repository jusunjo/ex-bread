import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ad from "./components/Ad";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main/Main";
import BreadKinds from "./navbar/BreadKinds";
import Local from "./navbar/Local";

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <Ad />
                <Main />
                <Footer />
            </div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Local" element={<Local />} />
                <Route path="/BreadKinds" element={<BreadKinds />} />
            </Routes>
        </>
    );
}

export default App;
