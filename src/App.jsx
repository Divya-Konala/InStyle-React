import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/store";
import AllRoutes from "./routing/AllRoutes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main>
        <AllRoutes />
      </main>
    </div>
  );
}

export default App;
