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
            <h1 class="font-weight-light">Profile</h1>
            <p>
            As a consequence of the fact that the most famous poems tend to be the older ones,
             they also often have distinct rhyme schemes threaded throughout the verses. 
             While I personally do think rhyming poems are generally better, 
             and that partially also accounts for their fame, I recognise how subjective this adjective is.
              Moreover, non-rhyming poems have played a significant role in literature during the 
              last century in particular. In fact, the influence of poems such as Ginsberg
              (#5 below) on his adherents would probably be difficult to overestimate. 
              Instead of confining myself to the older, rhyming poems which usually make up lists like this,
               I’ve therefore picked and chosen to ensure a fuller range of poets. 
               This reflects a more diverse canon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;