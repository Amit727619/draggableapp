// src/Draggable.js
import React, { useState } from 'react';
import './Draggable.css';

const Draggable = ({ children, title }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null); // Position relative to the mouse

  const onMouseDown = (e) => {
    if (e.button !== 0) return; // Only left mouse button
    const pos = { x: e.pageX - position.x, y: e.pageY - position.y };
    setRel(pos);
    setDragging(true);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    const newPos = { x: e.pageX - rel.x, y: e.pageY - rel.y };
    setPosition(newPos);
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className="draggable"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div className="title-bar" onMouseDown={onMouseDown}>
        {title}
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Draggable;
