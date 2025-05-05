import React from 'react';
import { Link } from 'react-router-dom';

const Releases = () => (
  <section id="releases" className="section">
    <h2>Releases</h2>
    <ul>
      <li>
        <Link to="/releases/insiders">
          <strong>INSIDERS</strong>
        </Link>{' '}
        – Released January 2025
        <br />
        <br />
        <div className="video-container">
          <iframe
            width="500"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2017289757&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </li>
      <li>
        <Link to="/releases/outbreak">
          <strong>OUTBREAK</strong>
        </Link>{' '}
        – Released April 2025
        <br />
        <br />
        <div className="margin-bottom-sm">
          <iframe
            width="500"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2070386344&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
          ></iframe>
        </div>
      </li>
      <li>
        <div className="margin-bottom-xxs">
          <strong>Hypnotic Techno DJ Set at Hama Club - January 2025</strong>
        </div>
        <div className="video-container">
          <iframe
            width="500"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2069654668&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </li>
      <li>
        <div className="margin-bottom-xxs">
          <strong>Hypnotic Minimal House Studio Mix - July 2024</strong>
        </div>
        <iframe
          width="500"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1863839835&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </li>
    </ul>
  </section>
);

export default Releases;
