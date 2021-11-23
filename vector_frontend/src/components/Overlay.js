import React from 'react';

// Component that handles Overlay of Item over main screen when selected
const Overlay = ({selectedItem}) => (
  <div id="overlay">
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column justify-content-center w-50 h-75">
        <div class="card m-2">
          <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title">{selectedItem.title}</h5>
            <img className="card-photo" src={selectedItem.img_url} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Overlay;
