import React from 'react'
import './Team.css'
import p1 from '../images/p1.jpg'
// import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'
const Team = () => {
  return (
    <team>
      <div className="t1">
        <h1>Our Team</h1>
      </div>
      <div className="t1">
        {/* Column 1*/}
        <div className="t3">
          <div className="card1">
            <div className="img-container">
              <img src={p1} alt="Luna Turner" />
            </div>
            <h3>Hope Watkins</h3>
            <p>Security Adviser</p>
            <div className="icons1">
              <a href="/#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/#">
                <i className="fab fa-github"></i>
              </a>
              <a href="/#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Column 3*/}
        <div className="t3">
          <div className="card1">
            <div className="img-container">
              <img src={p3} alt="Hope Watkins" />
            </div>
            <h3>Luna Turner</h3>
            <p>CONSULTANT</p>
            <div className="icons1">
              <a href="/#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/#">
                <i className="fab fa-github"></i>
              </a>
              <a href="/#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="t3">
          <div className="card1">
            <div className="img-container">
              <img src={p4} alt="Hope Watkins" />
            </div>
            <h3>Stuart  Brown</h3>
            <p>TRAINEER</p>
            <div className="icons1">
              <a href="/#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/#">
                <i className="fab fa-github"></i>
              </a>
              <a href="/#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </team>
  );
};

export default Team