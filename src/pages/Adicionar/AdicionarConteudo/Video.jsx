import React, {useEffect, useState} from 'react'
import { getStorage, ref, listAll, list, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { dbFire, listarItens, storage } from '../../../firebase/config';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

//Bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar';

//Hooks
import { useInsertDocument } from '../../../hooks/useInsertDocument';

//Context
import { useAuthValue } from '../../../context/AuthContext';

//Icones
import { FaFileUpload } from "react-icons/fa"

//Styled components
import {
  StyledDiv
} from "../../stylesGeral"

//Styled components
import {
  Div,
  StyledDivVideo,
  StyledUpload,
  StyledTextArea
} from "./styles"


export const Conteudo = () => {
 
  const [progressVideo, setProgressVideo] = useState(0);
  const [progressImagem, setProgressImagem] = useState(0);
  const [videoURL, setVideoURL] = useState(undefined); //Input so do video
  const [imagem, setImagem] = useState(undefined); //Input so da imagem

  const [titulo, setTitulo] = useState("");
  const [processo, setProcesso] = useState("");
  const [estacao, setEstacao] = useState("");
  const [tempoVideo, setTempoVideo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [descricaoBreve, setDescricaoBreve] = useState("");
  const [tipoVideo, setTipoVideo] = useState("");
  const [formError, setFormError] = useState("");

  const {insertDocument, response} = useInsertDocument("conteudo");

  const navigate = useNavigate();

  const {user} = useAuthValue();

  const handleUploadVideo = (e) => {
    e.preventDefault();

    const file = e.target[0]?.files[0]
    if(!file) return;

    const storageRef = ref(storage, `video/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgressVideo(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(urlVideo => {
          setVideoURL(urlVideo);
        })
      }
    )
  }

  const handleUploadImagem = (e) => {
    e.preventDefault();

    const file = e.target[0]?.files[0]
    if(!file) return;

    const storageRef = ref(storage, `imagem/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgressImagem(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(urlImagem => {
          setImagem(urlImagem);
        })
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");
    //Checar os valores
    if(!titulo || !imagem || !processo || !estacao || !tempoVideo || !descricao ||videoURL || !tipoVideo
      || !descricaoBreve) {
      setFormError("Por favor, preencha todos os campos!")
    }
    
    if(formError) return;

    insertDocument({
      titulo,
      processo,
      estacao,
      descricao,
      imagem,
      tipoVideo,
      descricaoBreve,
      tempoVideo,
      videoURL,
      uid: user.uid
    })

    navigate("/")
  }


  return (
    <StyledDivVideo>
      {/*Formulario somente do vídeo*/}
      <Div className='d-flex flex-column align-items-center justify-content-center'>
        <h3 className="p-3 w-100 text-center bg-light border-bottom">Escolha um vídeo - Adicionar Conteúdo</h3>
          <i className="h1">
            <FaFileUpload/>
          </i>
          <p className="text-center">Selecione abaixo um vídeo em seu computador para adiciona-lo ao conteúdo.</p>
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
            {videoURL && <button type="submit" className="btn btn-success d-none">Anexado</button>}
            {!videoURL && <button type="submit" className="btn btn-primary">Anexar</button>}
          </form>
          <div className='d-flex flex-column w-50 align-items-center'>
            {!videoURL && <progress className="progress-bar w-100 my-2" role="progressbar" value={progressVideo} max="100"/>}
            {!videoURL && <h3 role="progressbar">{progressVideo}%</h3>}
          </div>
          {videoURL && <video src={videoURL} width="200px" className="my-2"/>}
          {videoURL && <h3 className="p-3 w-100 text-center bg-light border-top text-success">Anexado com sucesso</h3>}
      </Div>

      {/*Formulario somente da imagem*/}
      <Div className='d-flex flex-column align-items-center justify-content-center'>
        <h3 className="p-3 w-100 text-center bg-light border-bottom">Escolha uma imagem - Adicionar Conteúdo</h3>
          <i className="h1">
            <FaFileUpload/>
          </i>
          <p className="text-center">Selecione abaixo uma imagem em seu computador para ser a thumbnail do conteúdo.</p>
          <form onSubmit={handleUploadImagem}
          className='w-100 d-flex flex-column align-items-center justify-content-center my-0 gap-5'> 
            {!imagem && <StyledUpload className="btn btn-primary">
              <label htmlFor="imagem">Selecionar imagem</label>
              <input type="file" name="imagem" id="imagem"/>
            </StyledUpload>}
            {imagem && <StyledUpload className="btn btn-primary d-none">
              <label htmlFor="imagem">Selecionar imagem</label>
              <input type="file" name="imagem" id="imagem"/>
            </StyledUpload>}
            {imagem && <button type="submit" className="btn btn-success d-none">Anexado</button>}
            {!imagem && <button type="submit" className="btn btn-primary">Anexar</button>}
          </form>
          <div className='d-flex flex-column w-50 align-items-center'>
            {!imagem && <progress className="progress-bar bg-blue w-100 my-2" role="progressbar" value={progressImagem} max="100"/>}
            {!imagem && <h3 role="progressbar">{progressImagem}%</h3>}
          </div>
          {imagem && <video src={imagem} width="200px" className="my-2"/>}
          {imagem && <h3 className="p-3 w-100 text-center bg-light border-top text-success">Anexado com sucesso</h3>}
      </Div>

      {/*Formulario descricao*/}
      <Div className='d-flex flex-column align-items-center justify-content-center'>
        <h3 className="p-3 w-100 text-center bg-light border-bottom">Descrições do conteúdo</h3>
          <form onSubmit={handleSubmit}
          className='w-100 d-flex flex-column align-items-center justify-content-center my-2 gap-5'>
            <div className='d-flex flex-row align-items-center justify-content-center gap-3'>
              <label htmlFor="" className='d-flex flex-column align-items-center justify-content-center gap-1'>
                <span className='align-self-start'>Título do conteúdo:</span>
                <input 
                type="text" 
                name="titulo" 
                required
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo}/>
              </label>
              <label htmlFor="" className='d-flex flex-column align-items-center justify-content-center gap-1'>
                <span>Processo no qual o video se refere:</span>
                <select 
                name="processo" 
                id="select"
                required
                onChange={(e) => setProcesso(e.target.value)}
                value={processo}
                >
                  <option value="">Selecionar</option>
                  <option value="bobinagem">Bobinagem</option>
                  <option value="montagemfinal">Montagem-Final</option>
                </select>
              </label>
              <label htmlFor="" className='d-flex flex-column align-items-center justify-content-center gap-1'>
                <span>Estação no qual o video se refere:</span>
                <select 
                name="estacao" 
                id="select"
                required
                onChange={(e) => setEstacao(e.target.value)}
                value={estacao}
                >
                  <option value="">Selecionar</option>
                  <option value="bob09">Bob09</option>
                  <option value="bob15">Bob15</option>
                  <option value="bob17">Bob17</option>
                  <option value="mf02">MF02</option>
                  <option value="mf03">MF03</option>
                  <option value="mf05">MF05</option>
                </select>
              </label>
            </div>
            <div className='w-100 d-flex align-items-start justify-content-center gap-2'>
              <label htmlFor="" className='d-flex flex-column align-items-center justify-content-center'>
                <span className='align-self-start'>Tempo de vídeo:</span>
                <input 
                type="text" 
                name="tempoVideo" 
                required
                onChange={(e) => setTempoVideo(e.target.value)}
                value={tempoVideo}/>
              </label>
              <label htmlFor="" className='d-flex flex-column align-items-center justify-content-center gap-1 w-50'>
                <span className='align-self-start'>Descrição breve do conteúdo</span>
                <textArea 
                className='w-100'
                name="descricaoBreve"
                required
                placeholder='Insira uma descrição breve para o conteúdo.'
                onChange={(e) => setDescricaoBreve(e.target.value)}
                value={descricaoBreve}
                >
                </textArea>
              </label>
              <label htmlFor="" className='d-flex flex-column align-items-center justify-content-center'>
                <span className='align-self-start'>Tipo de vídeo:</span>
                <select
                name="tipoVideo"
                id="select" 
                required
                onChange={(e) => setTipoVideo(e.target.value)}
                value={tipoVideo}>
                  <option value="">Selecionar</option>
                  <option value="inspecao">Inspeção</option>
                  <option value="regulagem">Regulagem</option>
                  <option value="ajuste">Ajuste</option>
                  <option value="setup">Setup</option>
                </select>
              </label>
            </div>
            <div className='d-flex flex-row align-items-center justify-content-center gap-3 w-100 px-5'>
              <label htmlFor="" className='d-flex flex-column align-items-center justify-content-center gap-1 w-100'>
                <span className='align-self-start'>Descrição do conteúdo</span>
                <StyledTextArea 
                className='w-100'
                name="descricao"
                required
                placeholder='Insira uma descrição para o conteúdo.'
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao}
                >
                </StyledTextArea>
              </label>
              
            </div>
            
            <div className='d-flex gap-3'>
              {/* Selecionar video*/}
              <input 
              className='d-none'
              type="text" 
              name="videoURL" 
              id="videoURL" 
              value={videoURL}/>
              
              {/* Selecionar imagem */}
              <input 
              className='d-none'
              type="text" 
              name="imagem" 
              id="imagem" 
              value={imagem}/>
            </div>

            {/*{videoURL && <button type="submit" className="btn btn-primary d-none">Enviar</button>}*/}
            <button type="submit" className="btn btn-primary">Enviar conteúdo</button>
            {response.error && <p>{response.error}</p>}
          </form>
          {response.error && <h3 className="p-3 w-100 text-center bg-light border-top text-error">{response.error}</h3>}
          {formError && <h3 className="p-3 w-100 text-center bg-light border-top text-error">{formError}</h3>}
          
      </Div>
    </StyledDivVideo>
  )
}

export default Conteudo