import React from "react";

function Footer(props) {
  const { data, showModal, handleToggleModal } = props;
  return (
    <footer className="">
      <div className="bg-gradient"></div>
      <div className="">
        <h2>{data?.title}</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
