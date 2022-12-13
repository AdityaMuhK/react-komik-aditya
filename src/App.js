import { useState } from "react";
import "./App.css";

import Komik from "./components/Komik";

function App() {
  // const movies = useState([{ id: 1, title: 'Pengabdi Setan 2'}]);
  const [komiks, setKomik] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rilis, setRilis] = useState("");
  const [synop, setSynop] = useState("");
  const [typek, setTypek] = useState("");
  const [status, setStatus] = useState("");
  const [Img, setImg] = useState("");

  const save = () => {
    setKomik((currentState) => {
      //currentState.push({ id: 2, title: title }) // ngga bisa
      // return currentState.filter()
      return [
        ...currentState,
        {
          id: currentState.length + 1,
          title: title,
          rilis: rilis,
          author: author,
          synop: synop,
          typek: typek,
          status: status,
          Img: Img,
        },
      ];
    });
  };
  return (
    <div className="container bg">
      <h1 className="text-center green">
        <b>
          <i>COMIC STORE</i>
        </b>
      </h1>
      <div className="card-footer row g-8 bckg">
        <label className="form-label" for="form5Example2">
          Masukkan Judul Komik
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label" for="form5Example2">
            Pembuat Komik(author)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label" for="form5Example2">
            Tanggal/Bulan/Tahun Rilis
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Released"
            value={rilis}
            onChange={(e) => setRilis(e.target.value)}
          />
        </div>

        <label className="form-label" for="form5Example2">
          Masukkan Synopsis
        </label>
        <div className="input-group mb-3">
          <textarea
            className="form-control"
            aria-label="With textarea"
            type="text"
            placeholder="synopsis"
            value={synop}
            onChange={(e) => setSynop(e.target.value)}
          ></textarea>
        </div>

        <label className="form-label" for="form5Example2">
          Type komik
        </label>
        <div
          className="input-group mb-3"
          type="text"
          placeholder="type-komik"
          value={typek}
          onChange={(e) => setTypek(e.target.value)}
        >
          <select className="form-select" id="inputGroupSelect02">
            <option selected>Type</option>
            <option value="Manhua">Manhua</option>
            <option value="Manhwa">Manhwa</option>
            <option value="Manga">Manga</option>
          </select>
        </div>

        <label className="form-label" for="form5Example2">
          Status komik
        </label>
        <div
          className="input-group mb-3"
          type="text"
          placeholder="type-komik"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <select className="form-select" id="inputGroupSelect02">
            <option selected>Status</option>
            <option value="OnGoing">OnGoing</option>
            <option value="Complited">Completed</option>
          </select>
        </div>

        <label className="form-label" for="form5Example2">
          URL
        </label>
        <div className="input-group mb-3">
          <br />
          <input
            type="url"
            className="form-control"
            placeholder="Masukkan URL"
            value={Img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        <button onClick={save} className="btn btn-outline-primary">
          SAVE
        </button>
      </div>
      <h1 className="text-center list">
        <b>
          <i>LIST COMIC</i>
        </b>
      </h1>
      <div className="row ">
        {komiks.map((komik) => (
          <Komik key={komik.id} komik={komik} />
        ))}
      </div>
    </div>
  );
}

export default App;
