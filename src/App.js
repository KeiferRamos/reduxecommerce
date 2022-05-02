import "./styles/App.css";
import RoutesComp from "./Routes";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import { useEffect } from "react";

function App({ userCart }) {
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(userCart));
  }, [userCart]);

  return (
    <div className="App">
      <Navbar />
      <RoutesComp />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userCart: state.userCart };
};

export default connect(mapStateToProps)(App);
