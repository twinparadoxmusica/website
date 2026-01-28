import './styles.css';

const Videos = ({ title, date, videoUrl, embedUrl }) => (
  <div className="video">
    {title ? (
      <div className="margin-bottom-20">
        <a target="_blank" className="video-link" href={videoUrl}>
          <strong>{title}</strong>
        </a>
        <br />
        {date}
      </div>
    ) : null}
    <div className="video-container margin-bottom-20">
      <iframe
        className="video-iframe"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default Videos;
