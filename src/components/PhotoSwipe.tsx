import React from "react";
import "../css/PhotoSwipe.css";

class PhotoSwipe extends React.Component {
  denumire = "";
  salariu = -1;
  studii = "";
  aux = -1;
  images = [
    "/src/joburi/p1.png",
    "/src/joburi/p2.png",
    "/src/joburi/p3.png",
    "/src/joburi/p4.png",
  ];

  handleClick = () => {
    // This will trigger a re-render without using useState
    let selectedImage = "";
    let randomIndex = this.aux;
    while (randomIndex === this.aux) {
      randomIndex = Math.floor(Math.random() * this.images.length);
    }
    selectedImage = this.images[randomIndex];
    this.aux = randomIndex;
    console.log(this.aux);
    this.forceUpdate();
  };

  render() {
    return (
      <center>
        {" "}
        <div>
          <button
            id="login"
            type="button"
            className="btn btn-danger latime"
            onClick={this.handleClick}
          >
            PASS
          </button>
          <img
            className="poza"
            src={this.images[this.aux]}
            alt={`Imagine ${this.aux + 1}`}
          />
          <button
            id="login"
            type="button"
            className="btn btn-success latime"
            onClick={this.handleClick}
          >
            SMASH
          </button>
        </div>
        <div className="latimetabel">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Denumire</th>
                <th scope="col">Bani</th>
                <th scope="col">Studii</th>
              </tr>
            </thead>
            <tbody className="table-group-divider ">
              <tr>
                <th scope="row">1</th>
                <td>{this.denumire}</td>
                <td>ceva</td>
                <td>@ceva</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ceva</td>
                <td>ceva</td>
                <td>@ceva</td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    );
  }
}

export default PhotoSwipe;
