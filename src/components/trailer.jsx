import React from "react";

import "../assets/css/trailer.css";

function Trailer() {
  return (
    <section className="trailer">

        <h2>Trailer do game</h2>
      <div className="trailerContainer">
        <div class="containerIframe">
          <iframe
            class="responsive-iframe"
            src="https://www.youtube.com/embed/L6Z-G5mQ0PA"
          ></iframe>
        </div>
      
      <h3>Trailer de Anniversary Edition</h3>
      </div>
      
    </section>
  );
}

export default Trailer;
