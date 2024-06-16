import React from "react";

function Main(props) {
  const { data } = props;
  return (
    <div className="img-container">
      <img
        className="bg-image"
        src={data.thumbnail_url ? data.thumbnail_url : data.hdurl}
        alt={data.title || "bg-img"}
      />
    </div>
  );
}

export default Main;
