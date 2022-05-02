import React from "react";
import { REMOVE_MSG } from "../Redux/ActionType";
import "../styles/Msgbox.css";
import { connect } from "react-redux";

function Msgbox({ message, removeMSG, className }) {
  const checkIFChild = (e) => {
    if (e.target.className == "modal-message") {
      removeMSG();
    }
  };

  return (
    <div className={className} onClick={(e) => checkIFChild(e)}>
      <div>
        <p>{message}</p>
        {className == "modal-message" && (
          <button onClick={() => removeMSG()}>ok</button>
        )}
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { removeMSG: () => dispatch({ type: REMOVE_MSG }) };
};

export default connect(null, mapDispatchToProps)(Msgbox);
