import React from "react";
import "./VideoFooter.css";
// import vinil from "./src/pages/components.footer.vinil.png";


function VideoFooter() {
  return (
    <footer className="videoFooter">
      <div className="videoFooter_text">
        <h3>@Thiago Mazulo</h3>
        <p>Descrição do vídeo</p>
        <div className="videoFooter_music">
          <p>icone</p>
          <p>titulo da musica</p>
        </div>
      </div>
      <img className="videoFooter_record"
      alt="imagem vinil"
      src=""/> 
    </footer>
  );
}

export default VideoFooter;
