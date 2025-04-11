import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { runAnimation } from './utils/animation';
import logo from './assets/twin-paradox-typography.png';

function App() {
  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <div className="app">
      <canvas id="galaxyCanvas"></canvas>
      <section id="about" className="section">
        <img
          src={logo}
          alt="Twin Paradox Logo"
          className="fade-in margin-bottom-lg"
        ></img>
        <p>
          Twin Paradox, an Argentinian electronic music duo based in Geneva, was
          formed in 2023 by Mirko Hrubik and Ezequiel Cappellano. They create
          hypnotic and energetic <b>Techno</b> with <b>Rock/Metal</b>{' '}
          influences, using analog and digital hardware with instruments like
          guitar, voice and synthesizers, performing both <b>Live Sets</b> and{' '}
          <b>DJ formats</b>.
        </p>
        <p>
          Read full bio at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ra.co/dj/twinparadox/biography"
          >
            Resident Advisor
          </a>
        </p>
      </section>

      <section id="videos" className="section">
        <h2 className="margin-bottom-sm">Videos</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GEH6M5wipNk?si=KqaSQNbyuCt7Mbnf"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/P361vVvKCXg?si=5we2CFduNi58eQ8L"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="releases" className="section">
        <h2>Releases</h2>
        <ul>
          <li>
            <strong>Insiders</strong> – Released January 2025
            <br />
            <div className="margin-bottom-xs">
              <a href="https://hypeddit.com/twinparadox/insiders">Listen Now</a>
            </div>
            <div className="video-container">
              <iframe
                width="50%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2017289757&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </li>
          <li>
            <strong>Outbreak</strong> – Coming April 2025
            <br />
            <div className="margin-bottom-sm">
              <a href="https://distrokid.com/hyperfollow/twinparadox/outbreak">
                Pre-save Now
              </a>
            </div>
          </li>
          <li>
            <div className="margin-bottom-xxs">
              <strong>Hypnotic Techno DJ Set at Hama Club</strong>
            </div>
            <div className="video-container">
              <iframe
                width="50%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2069654668&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </li>
          <li>
            <div className="margin-bottom-xxs">
              <strong>Hypnotic Minimal House Studio Mix - July 2024</strong>
            </div>
            <iframe
              width="50%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1863839835&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to reach out to the following email:</p>
        <p>
          <a href="mailto:twinparadoxmusica@gmail.com">
            twinparadoxmusica@gmail.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Twin Paradox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
