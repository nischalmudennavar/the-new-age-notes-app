import React from "react";
import Draggable from "react-draggable";
import "./style.css";

const DraggableItem = ({ item, xPos, yPos, deleteNote, id }) => {
  const [isDragged, setIsDragged] = React.useState(false);

  const style = {
    backgroundColor: "#8F43EE",
    color: "white",
    border: "2px solid #ffffff44",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    padding: "12px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: isDragged
      ? "0px 0px 100px 0px #8F43EE, 0px 0px 0px 0px #8F43EE"
      : "0px 0px 0px 0px #8F43EE",
    cursor: "move",
    transition: "all 0.4s cubic-bezier(0,.99,.28,1.01)",
   
    zIndex: "100000000",
    fontWeight: "400",
    letterSpacing: "1px",
    fontSize: "1rem",
    animation: isDragged ? "pulsate 1s ease-in-out infinite" : "none",
  };

  return (
    <Draggable
      defaultPosition={{ x: xPos - 50, y: yPos + 50 }}
      style={{
        position: "absolute",
        zIndex: "1000",
      }}
      onStart={() => {
        setIsDragged(true);
      }}
      onStop={() => {
        setIsDragged(false);
      }}
    >
      <h4 style={style}>
        {item}
        <button
          onClick={() => {
            deleteNote(id);
          }}
        >
          X
        </button>
      </h4>
    </Draggable>
  );
};

export default DraggableItem;