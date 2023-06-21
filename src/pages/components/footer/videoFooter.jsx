import React from "react";
import "./VideoFooter.css";
import vinil from "../footer/vinil.png";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <footer className="videoFooter">
      <div className="videoFooter_text">
        <h3>@Thiago Mazulo</h3>
        <p>Descrição do vídeo</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter_icon" />
          <div className="videoMusicFooter_text">
            <p>titulo da musica</p>
          </div>
        </div>
      </div>
      <img className="videoFooter_record" alt="imagem vinil" src={vinil} />
    </footer>
  );
}

export default VideoFooter;
