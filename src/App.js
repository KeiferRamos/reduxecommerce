import "./styles/App.css";
import RoutesComp from "./Routes";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App({ userCart }) {
  const nav = useNavigate();
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(userCart));
    nav("/");
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
