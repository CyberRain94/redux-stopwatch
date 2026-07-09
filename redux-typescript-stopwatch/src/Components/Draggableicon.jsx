import React from "react";
import "./Draggableicon.css";

const Draggableicon = () => {
  return (
    <div className="drag-indicator" title="Drag to move">
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true">
        <path
          d="M12 2l2.6 4H9.4L12 2Zm0 20-2.6-4h5.2L12 22Z"
          fill="gray"
          strokewidth="1.2"
        />
        <path
          d="M12 5.2c-2.8 0-5 2.2-5 5v3.1l-1.5 1.5v2.2h2.8l1.2-1.2v-1h5v1l1.2 1.2h2.8v-2.2l-1.5-1.5v-3.1c0-2.8-2.2-5-5-5Z"
          fill="gray"
        />
        <path
          d="M9 13.3h6"
          stroke="gray"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <circle cx="12" cy="10.2" r="1.5" fill="#7df9ff" />
        <path
          d="M12 0.8v2.1M12 21.1v2.1M0.8 12h2.1M21.1 12h2.1"
          stroke="gray"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M12 3l1.2 1.2M12 3l-1.2 1.2M12 21l1.2-1.2M12 21l-1.2-1.2M3 12l1.2-1.2M3 12l1.2 1.2M21 12l-1.2-1.2M21 12l-1.2 1.2"
          stroke="gray"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
export default Draggableicon;
