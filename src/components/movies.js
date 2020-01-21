import React from "react";
import "../css/movie.css";
import Pup from "../images/puppygif.gif";

const Movies = () => {
  return (
    <div>
      
      <div className="header-top">
          {/* <Logo src={logo} alt="Netflix" /> */}
          <a href="/"><img src="https://fontmeme.com/permalink/200105/8b9176f83255bf05070d0b0c44e708e0.png" alt=""/></a>
      </div>

       <nav className="main-nav">
        <a href="/">Home</a>
        <a href="#myList">Popular on Pupflix</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">Originals</a>
      </nav>

      <div>
        <img src={Pup} alt="pup" style={{width: "100%"}}/>
      </div>

      <div>
        <h1 id="myList">Popular on Pupflix</h1>
        <div className="box">
          <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-598429851c33f__880.jpg"
            alt=""
          />
          <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984297115ed2__880.jpg"
            alt=""
          />
          <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-598429611679a__880.jpg"
            alt=""
          />
          <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984296f19db4__880.jpg"
            alt=""
          />
          <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-598429681482c__880.jpg"
            alt=""
          />
          <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984295d1c6c6__880.jpg"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1 id="tvShows">Pup Shows</h1>
        <div className="box">
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984298a1dbff__880.jpg"
            alt=""
          />
          <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-598429545ac2c__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984298c2ce35__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984299028ac4__880.jpg"
            alt=""
          />
          <img
            src="https://www.fashionplaytes.com/blog/wp-content/uploads/2017/09/A-dog-that-was-photo-shopped-on-movie-posters-3.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984298743832__880.jpg"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1 id="movies">Action Pup Movies</h1>
        <div className="box">
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984297515993__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984298338520__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984297712aca__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984297a0e31b__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984296b09a73__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984297c1dba5__880.jpg"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1 id="originals"> Pupflix Originals</h1>
        <div className="box">
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984295a34d15__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984297314fa3__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984295f3ae21__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-5984296528e72__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-59842981207c1__880.jpg"
            alt=""
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/I-Photoshop-My-Dog-Into-Movie-Posters-598429631ba54__880.jpg"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="link">
          <div className="logos">
            <i className="fab fa-facebook-square fa-2x logo"></i>
            <i className="fab fa-instagram fa-2x logo"></i>
            <i className="fab fa-twitter fa-2x logo"></i>
            <i className="fab fa-youtube fa-2x logo"></i>
          </div>
          <div className="sub-links">
            <ul>
              <li>
                <a href="/">Created</a>
              </li>
              <li>
                <a href="/">By</a>
              </li>
              <li>
                <a href="/">Blake</a>
              </li>
              <li>
                <a href="/">Rochelle</a>
              </li>
              <li>
                <a href="/">Lower</a>
              </li>
              <li>
                <a href="/">Source</a>
              </li>
              <li>
                <a href="/">Code</a>
              </li>
              <li>
                <a href="/">Is</a>
              </li>
              <li>
                <a href="/">On</a>
              </li>
              <li>
                <a href="/">My</a>
              </li>
              <li>
                <a href="/">Github</a>
              </li>
              <li>
                <a href="/">Click Here</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
