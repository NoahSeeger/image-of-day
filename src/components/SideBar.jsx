import React from "react";

function SideBar(props) {
  const { data, handleToggleModal } = props;
  return (
    <div className="sidebar">
      <div className="bg-overlay" onClick={handleToggleModal}></div>
      <div className="sidebar-contents">
        <h2>{data?.title}</h2>
        <div className="">
          <p>{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
