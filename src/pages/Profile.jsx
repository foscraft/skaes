import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">My Profile</h1>
            <p class="lead">
                My name is Reuben Nyaribari, I am a Python data engineer and programmer.<br/>
                I have a Bachelors in Mathematics with a Statistics major.
              </p>
              <p class="lead">
                I am currently learning software development other interetsting tech things at Skaehub Nairobi, Kenya.
              </p>
              <p class="lead">
                You can check out my projects on my <a href="https://github.com/foscraft">github</a> .
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;