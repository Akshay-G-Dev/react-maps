import './App.css'
import India from "@react-map/india";
import PopularCategories from "./components/PopularCategories";
function App() {

  return (
    <>
      <PopularCategories />
      <div style={{ height: "50vh" }}></div>
      <India className="map" hoverColor="orange" type="select-single" hints />
    </>
  );
}

export default App
