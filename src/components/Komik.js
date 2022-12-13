function Komik({ komik }) {
  return (
    <div className="card-group col-6 bckg my-2 ">
      <div className="card">
        <img src={komik.Img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{komik.title}</h5>
          <h6 className="card-title text-muted">
            <b>Author: </b>
            {komik.author}
          </h6>{" "}
          <br />
          <h7 className="card-title text-muted">
            <b>Type:</b> {komik.typek}
          </h7>{" "}
          <br />
          <h7 className="card-title text-muted">
            <b> status:</b> {komik.status}
          </h7>{" "}
          <br />
          <h7 className="card-text">
            <b>synopsis: </b>
            {komik.synop}
          </h7>
        </div>
        <div className="card-footer">
          <small className="text-muted">Released: {komik.rilis}</small>
          <button className="btn btn-success float-end" type="submit">
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Komik;
