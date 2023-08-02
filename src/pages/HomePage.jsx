import poster1 from "../assets/images/poster1.png";
import ProductsCatalog from "../components/ProductsCatalog";
import "../styles/HomePage.css"

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="poster">
        <img src={poster1} alt="poster1" />
      </div>
      <ProductsCatalog/>
    </div>
  );
};

export default HomePage;
