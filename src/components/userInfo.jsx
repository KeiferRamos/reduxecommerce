import React, { useEffect, useState } from "react";
import "../styles/user-info.css";
import { connect } from "react-redux";
import { CLEAR_CART, SET_INFO } from "../Redux/ActionType";

function UserInfo({ closeForm, userInfo, dispatch }) {
  const { fullname, address, contact } = userInfo;
  const [info, setInfo] = useState({ fullname, address, contact });
  const [label, setLabel] = useState("user info");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const clickOutside = (e) => {
    if (e.target.className == "user-info") {
      closeForm();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLabel("user info");
    }, 1200);
    return () => clearTimeout(timer);
  }, [label]);

  const checkOut = () => {
    const { fullname, address, contact } = info;
    if (!fullname || !address || !contact) {
      setLabel("All fields are required");
    } else {
      dispatch({ type: SET_INFO, payload: info });
      setShowConfirmation(true);
      localStorage.setItem("user-info", JSON.stringify(info));
    }
  };

  const confirmCheckOut = () => {
    dispatch({ type: CLEAR_CART });
    closeForm();
  };

  return (
    <div className="user-info" onClick={(e) => clickOutside(e)}>
      {showConfirmation ? (
        <div className="confirm form">
          <p>
            hello <span>{fullname}</span>
          </p>
          <p>
            we will deliver your parcel in this address <span>{address}</span>
          </p>
          <p>if we will having a problem finding your address</p>
          <p>
            we will contact you at <span>{contact}</span>
          </p>
          <button onClick={() => confirmCheckOut()}>confirm</button>
          <button onClick={() => setShowConfirmation(false)}>return</button>
        </div>
      ) : (
        <div className="fill-up form">
          <p>{label}</p>
          {Object.keys(info).map((text, i) => {
            return (
              <input
                key={i}
                type="text"
                placeholder={text}
                value={info[text]}
                onChange={(e) => setInfo({ ...info, [text]: e.target.value })}
              />
            );
          })}
          <button onClick={() => checkOut()}>check out</button>
        </div>
      )}
    </div>
  );
}

export default connect((state) => state)(UserInfo);
