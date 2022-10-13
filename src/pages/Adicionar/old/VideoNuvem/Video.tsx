import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import React, {useState} from 'react'
import { storage } from '../../../../firebase/config';

//Icones
import { FaFileUpload } from "react-icons/fa"

//Styled components
import {
  StyledDiv
} from "../../../stylesGeral"

//Styled components
import {
  Div,
  StyledDivVideo,
  StyledUpload
} from "./styles"

//Bootstrap
import {
  Button
} from 'react-bootstrap';

export const Video = () => {
  const [videoURL, setVideoURL] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUploadVideo = (e:any) => {
    e.preventDefault();

    const file = e.target[0]?.files[0]
    if(!file) return;

    const storageRef = ref(storage, `video/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgress(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setVideoURL(url);
        })
      }
    )
  }

  console.log(videoURL)

  return (
    <StyledDivVideo>
      <Div className='d-flex flex-column align-items-center justify-content-center'>
        <h3 className="p-3 w-100 text-center bg-light border-bottom">Enviar vídeo na Nuvem do Firebase</h3>
          <i className="h1">
            <FaFileUpload/>
          </i>
          <p className="text-center">Selecione abaixo um video em seu computador para envia-lo à nuvem do Firebase.</p>
          <form onSubmit={handleUploadVideo}
          className='w-100 d-flex flex-column align-items-center justify-content-center my-0 gap-5'> 
            {!videoURL && <StyledUpload className="btn btn-primary">
              <label htmlFor="video">Selecionar video</label>
              <input type="file" name="video" id="video"/>
            </StyledUpload>}
            {videoURL && <StyledUpload className="btn btn-primary d-none">
              <label htmlFor="video">Selecionar video</label>
              <input type="file" name="video" id="video"/>
            </StyledUpload>}
            {videoURL && <button type="submit" className="btn btn-primary d-none">Enviar</button>}
            {!videoURL && <button type="submit" className="btn btn-primary">Enviar</button>}
          </form>
          <div className='d-flex flex-column w-50 align-items-center'>
            {!videoURL && <progress className="progress-bar w-100 my-2" role="progressbar" value={progress} max="100"/>}
            {!videoURL && <h3 role="progressbar">{progress}%</h3>}
          </div>
          {videoURL && <video src={videoURL} width="200px" className="my-2"/>}
          {videoURL && <h3 className="p-3 w-100 text-center bg-light border-top text-success">Enviado com sucesso</h3>}
      </Div>
    </StyledDivVideo>
  )
}

export default Video