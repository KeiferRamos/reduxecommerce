import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "../styles/dropdown.css";
import { SELECT_FILTER } from "../Redux/actions";

function DropDown({ dispatch, name, option, selection }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(() => {
    const { brand, category } = selection;
    return name == "brand" ? brand : category;
  });

  const filterItems = (option) => {
    dispatch({ type: SELECT_FILTER, payload: [option, name] });
    setOpen(false);
    setSelected(option);
  };

  return (
    <div className="selection">
      <p>
        {name}: <span>{selected}</span>
      </p>
      {open ? (
        <FiChevronUp onClick={() => setOpen(false)} />
      ) : (
        <FiChevronDown onClick={() => setOpen(true)} />
      )}
      {open && (
        <div className="option">
          {option.map((opt, i) => (
            <p key={i} onClick={() => filterItems(opt)}>
              {opt}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
