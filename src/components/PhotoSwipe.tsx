import React from "react";
import "../css/PhotoSwipe.css";
import { read } from "fs";

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
        <table className="table latimetabel">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>{this.denumire}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </center>
    );
  }
}

export default PhotoSwipe;
