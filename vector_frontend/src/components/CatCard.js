import React from "react";
import Loader from "react-loader-spinner";

const CatCard = ({ catItem, setSelectedItem }) => {

  function viewItem() {
    setSelectedItem(catItem);
    document.getElementById("overlay").style.display = "block";
  }
  return (
    <div onClick={() => viewItem()} className="card m-2 card-dimension">
      {catItem.title ? (
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{catItem.title}</h5>
          <img className="card-photo" src={catItem.img_url} />
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Loader
            type="TailSpin"
            color="#00BFFF"
          />
        </div>
      )}
    </div>
  );
};

export default CatCard;
