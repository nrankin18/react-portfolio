import React from "react";
import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import { flags } from "../util/flags.js";
import Map from "../components/Map";
import Destinations from "../components/Destinations";

class Aviation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: 0,
      boardRow1: "Chicago, IL           KMDW",
      boardRow2: "Green Bay, WI         KGRB",
      boardRow3: "Nantucket, MA         KACK",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div class="aviation">
          <h1 class="aviation-header">Aviation</h1>
          <div class="line"></div>
          <div class="aviation-intro">
            <div class="aviation-about">
              <p>
                Aviation has always fascinated me. At the age of 10, I went for
                my first introductory flight in a small general-aviation
                aircraft and made it my goal to earn a pilot's license. After
                turning 17, I became a certified private pilot and later added
                an instrument rating and complex endorsement to my certificate.
                Since then I have seen many amazing sights from the air
                including the skyline of Chicago, the peaks of the Cascades, and
                the Massachusetts cape, all while sharing my passion with
                friends and family.
              </p>
              <img src="/img/wings.png" />
            </div>
            <Slideshow
              isAviation={1}
              slides={[
                { image: "/img/aviation/av3.png", caption: "Mount Hood" },
                { image: "/img/aviation/av1.png", caption: "Chicago" },
                { image: "/img/aviation/av4.png", caption: "Boston College" },
                {
                  image: "/img/aviation/av2.png",
                  caption: "Arches National Park",
                },
                { image: "/img/aviation/av5.png", caption: "Nantucket" },
                { image: "/img/aviation/av6.png", caption: "Niagara Falls" },
                { image: "/img/aviation/av7.png", caption: "White Mountains" },
              ]}
            />
          </div>
          <br />
          <br />
          <div class="subline"></div>
          <div class="flags">
            {flags.map((flag) => {
              return (
                <div class="flag">
                  <img src={flag} />
                </div>
              );
            })}
          </div>
          <Map />
          <Destinations />
          <br />
          <br />
          <div class="subline"></div>
          <h3 class="subsection">
            <span class="aviation-section-text">Total Time:</span>
          </h3>
          <div class="hours">167.6 hrs</div>
          <h3 class="subsection">
            <span class="aviation-subsection-text">Top-Time Aircraft:</span>
          </h3>
          <div class="aircraft">
            <div class="ac">
              <img src="/img/c152.png" />
              <span class="ac-id">Cessna 152</span>
              <span class="subline"></span>
              <div class="ac-hours">39.3 hrs</div>
            </div>
            <div class="ac">
              <img src="/img/c172.png" />
              <span class="ac-id">Cessna 172</span>
              <span class="subline"></span>
              <div class="ac-hours">74.6 hrs</div>
            </div>
            <div class="ac">
              <img src="/img/p28a.png" />
              <span class="ac-id">Piper PA-28</span>
              <span class="subline"></span>
              <div class="ac-hours">40.8 hrs</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Aviation;